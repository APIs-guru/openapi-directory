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
import * as shared from "../shared";
var GetBackupsPathParams = /** @class */ (function (_super) {
    __extends(GetBackupsPathParams, _super);
    function GetBackupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetBackupsPathParams.prototype, "linodeId", void 0);
    return GetBackupsPathParams;
}(SpeakeasyBase));
export { GetBackupsPathParams };
var GetBackupsSecurity = /** @class */ (function (_super) {
    __extends(GetBackupsSecurity, _super);
    function GetBackupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetBackupsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetBackupsSecurity.prototype, "oauth", void 0);
    return GetBackupsSecurity;
}(SpeakeasyBase));
export { GetBackupsSecurity };
var GetBackups200ApplicationJsonAutomaticDisks = /** @class */ (function (_super) {
    __extends(GetBackups200ApplicationJsonAutomaticDisks, _super);
    function GetBackups200ApplicationJsonAutomaticDisks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesystem" }),
        __metadata("design:type", String)
    ], GetBackups200ApplicationJsonAutomaticDisks.prototype, "filesystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GetBackups200ApplicationJsonAutomaticDisks.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetBackups200ApplicationJsonAutomaticDisks.prototype, "size", void 0);
    return GetBackups200ApplicationJsonAutomaticDisks;
}(SpeakeasyBase));
export { GetBackups200ApplicationJsonAutomaticDisks };
export var GetBackups200ApplicationJsonAutomaticStatusEnum;
(function (GetBackups200ApplicationJsonAutomaticStatusEnum) {
    GetBackups200ApplicationJsonAutomaticStatusEnum["Paused"] = "paused";
    GetBackups200ApplicationJsonAutomaticStatusEnum["Pending"] = "pending";
    GetBackups200ApplicationJsonAutomaticStatusEnum["Running"] = "running";
    GetBackups200ApplicationJsonAutomaticStatusEnum["NeedsPostProcessing"] = "needsPostProcessing";
    GetBackups200ApplicationJsonAutomaticStatusEnum["Successful"] = "successful";
    GetBackups200ApplicationJsonAutomaticStatusEnum["Failed"] = "failed";
    GetBackups200ApplicationJsonAutomaticStatusEnum["UserAborted"] = "userAborted";
})(GetBackups200ApplicationJsonAutomaticStatusEnum || (GetBackups200ApplicationJsonAutomaticStatusEnum = {}));
var GetBackups200ApplicationJsonAutomatic = /** @class */ (function (_super) {
    __extends(GetBackups200ApplicationJsonAutomatic, _super);
    function GetBackups200ApplicationJsonAutomatic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", Array)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disks", elemType: GetBackups200ApplicationJsonAutomaticDisks }),
        __metadata("design:type", Array)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "disks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", Date)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], GetBackups200ApplicationJsonAutomatic.prototype, "updated", void 0);
    return GetBackups200ApplicationJsonAutomatic;
}(SpeakeasyBase));
export { GetBackups200ApplicationJsonAutomatic };
var GetBackups200ApplicationJsonSnapshot = /** @class */ (function (_super) {
    __extends(GetBackups200ApplicationJsonSnapshot, _super);
    function GetBackups200ApplicationJsonSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current" }),
        __metadata("design:type", shared.Backup)
    ], GetBackups200ApplicationJsonSnapshot.prototype, "current", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_progress" }),
        __metadata("design:type", shared.Backup)
    ], GetBackups200ApplicationJsonSnapshot.prototype, "inProgress", void 0);
    return GetBackups200ApplicationJsonSnapshot;
}(SpeakeasyBase));
export { GetBackups200ApplicationJsonSnapshot };
var GetBackups200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBackups200ApplicationJson, _super);
    function GetBackups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatic", elemType: GetBackups200ApplicationJsonAutomatic }),
        __metadata("design:type", Array)
    ], GetBackups200ApplicationJson.prototype, "automatic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshot" }),
        __metadata("design:type", GetBackups200ApplicationJsonSnapshot)
    ], GetBackups200ApplicationJson.prototype, "snapshot", void 0);
    return GetBackups200ApplicationJson;
}(SpeakeasyBase));
export { GetBackups200ApplicationJson };
var GetBackupsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetBackupsDefaultApplicationJson, _super);
    function GetBackupsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetBackupsDefaultApplicationJson.prototype, "errors", void 0);
    return GetBackupsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetBackupsDefaultApplicationJson };
var GetBackupsRequest = /** @class */ (function (_super) {
    __extends(GetBackupsRequest, _super);
    function GetBackupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackupsPathParams)
    ], GetBackupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackupsSecurity)
    ], GetBackupsRequest.prototype, "security", void 0);
    return GetBackupsRequest;
}(SpeakeasyBase));
export { GetBackupsRequest };
var GetBackupsResponse = /** @class */ (function (_super) {
    __extends(GetBackupsResponse, _super);
    function GetBackupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBackupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBackupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackups200ApplicationJson)
    ], GetBackupsResponse.prototype, "getBackups200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackupsDefaultApplicationJson)
    ], GetBackupsResponse.prototype, "getBackupsDefaultApplicationJsonObject", void 0);
    return GetBackupsResponse;
}(SpeakeasyBase));
export { GetBackupsResponse };
