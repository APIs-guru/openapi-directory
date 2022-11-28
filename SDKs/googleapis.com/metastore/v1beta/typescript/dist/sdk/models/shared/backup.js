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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
import { ServiceInput } from "./service";
export var BackupStateEnum;
(function (BackupStateEnum) {
    BackupStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BackupStateEnum["Creating"] = "CREATING";
    BackupStateEnum["Deleting"] = "DELETING";
    BackupStateEnum["Active"] = "ACTIVE";
    BackupStateEnum["Failed"] = "FAILED";
    BackupStateEnum["Restoring"] = "RESTORING";
})(BackupStateEnum || (BackupStateEnum = {}));
// Backup
/**
 * The details of a backup resource.
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Backup.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Backup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restoringServices" }),
        __metadata("design:type", Array)
    ], Backup.prototype, "restoringServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRevision" }),
        __metadata("design:type", Service)
    ], Backup.prototype, "serviceRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Backup.prototype, "state", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
// BackupInput
/**
 * The details of a backup resource.
**/
var BackupInput = /** @class */ (function (_super) {
    __extends(BackupInput, _super);
    function BackupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRevision" }),
        __metadata("design:type", ServiceInput)
    ], BackupInput.prototype, "serviceRevision", void 0);
    return BackupInput;
}(SpeakeasyBase));
export { BackupInput };
