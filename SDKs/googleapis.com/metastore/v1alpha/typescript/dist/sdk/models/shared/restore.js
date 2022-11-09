var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var RestoreStateEnum;
(function (RestoreStateEnum) {
    RestoreStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    RestoreStateEnum["Running"] = "RUNNING";
    RestoreStateEnum["Succeeded"] = "SUCCEEDED";
    RestoreStateEnum["Failed"] = "FAILED";
    RestoreStateEnum["Cancelled"] = "CANCELLED";
})(RestoreStateEnum || (RestoreStateEnum = {}));
export var RestoreTypeEnum;
(function (RestoreTypeEnum) {
    RestoreTypeEnum["RestoreTypeUnspecified"] = "RESTORE_TYPE_UNSPECIFIED";
    RestoreTypeEnum["Full"] = "FULL";
    RestoreTypeEnum["MetadataOnly"] = "METADATA_ONLY";
})(RestoreTypeEnum || (RestoreTypeEnum = {}));
// Restore
/**
 * The details of a metadata restore operation.
**/
var Restore = /** @class */ (function (_super) {
    __extends(Restore, _super);
    function Restore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=backup" }),
        __metadata("design:type", String)
    ], Restore.prototype, "backup", void 0);
    __decorate([
        Metadata({ data: "json, name=details" }),
        __metadata("design:type", String)
    ], Restore.prototype, "details", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Restore.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Restore.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Restore.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Restore.prototype, "type", void 0);
    return Restore;
}(SpeakeasyBase));
export { Restore };
