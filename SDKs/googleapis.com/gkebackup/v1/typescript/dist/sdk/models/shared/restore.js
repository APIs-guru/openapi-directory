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
import { RestoreConfig } from "./restoreconfig";
export var RestoreStateEnum;
(function (RestoreStateEnum) {
    RestoreStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    RestoreStateEnum["Creating"] = "CREATING";
    RestoreStateEnum["InProgress"] = "IN_PROGRESS";
    RestoreStateEnum["Succeeded"] = "SUCCEEDED";
    RestoreStateEnum["Failed"] = "FAILED";
    RestoreStateEnum["Deleting"] = "DELETING";
})(RestoreStateEnum || (RestoreStateEnum = {}));
// Restore
/**
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
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
        Metadata({ data: "json, name=cluster" }),
        __metadata("design:type", String)
    ], Restore.prototype, "cluster", void 0);
    __decorate([
        Metadata({ data: "json, name=completeTime" }),
        __metadata("design:type", String)
    ], Restore.prototype, "completeTime", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Restore.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Restore.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Restore.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Restore.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Restore.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=resourcesExcludedCount" }),
        __metadata("design:type", Number)
    ], Restore.prototype, "resourcesExcludedCount", void 0);
    __decorate([
        Metadata({ data: "json, name=resourcesFailedCount" }),
        __metadata("design:type", Number)
    ], Restore.prototype, "resourcesFailedCount", void 0);
    __decorate([
        Metadata({ data: "json, name=resourcesRestoredCount" }),
        __metadata("design:type", Number)
    ], Restore.prototype, "resourcesRestoredCount", void 0);
    __decorate([
        Metadata({ data: "json, name=restoreConfig" }),
        __metadata("design:type", RestoreConfig)
    ], Restore.prototype, "restoreConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Restore.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=stateReason" }),
        __metadata("design:type", String)
    ], Restore.prototype, "stateReason", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Restore.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Restore.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=volumesRestoredCount" }),
        __metadata("design:type", Number)
    ], Restore.prototype, "volumesRestoredCount", void 0);
    return Restore;
}(SpeakeasyBase));
export { Restore };
