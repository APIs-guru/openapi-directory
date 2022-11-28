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
var GetBackupPathParams = /** @class */ (function (_super) {
    __extends(GetBackupPathParams, _super);
    function GetBackupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backupId" }),
        __metadata("design:type", Number)
    ], GetBackupPathParams.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetBackupPathParams.prototype, "linodeId", void 0);
    return GetBackupPathParams;
}(SpeakeasyBase));
export { GetBackupPathParams };
var GetBackupSecurity = /** @class */ (function (_super) {
    __extends(GetBackupSecurity, _super);
    function GetBackupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetBackupSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetBackupSecurity.prototype, "oauth", void 0);
    return GetBackupSecurity;
}(SpeakeasyBase));
export { GetBackupSecurity };
var GetBackupDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetBackupDefaultApplicationJson, _super);
    function GetBackupDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetBackupDefaultApplicationJson.prototype, "errors", void 0);
    return GetBackupDefaultApplicationJson;
}(SpeakeasyBase));
export { GetBackupDefaultApplicationJson };
var GetBackupRequest = /** @class */ (function (_super) {
    __extends(GetBackupRequest, _super);
    function GetBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackupPathParams)
    ], GetBackupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackupSecurity)
    ], GetBackupRequest.prototype, "security", void 0);
    return GetBackupRequest;
}(SpeakeasyBase));
export { GetBackupRequest };
var GetBackupResponse = /** @class */ (function (_super) {
    __extends(GetBackupResponse, _super);
    function GetBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Backup)
    ], GetBackupResponse.prototype, "backup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBackupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBackupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBackupDefaultApplicationJson)
    ], GetBackupResponse.prototype, "getBackupDefaultApplicationJsonObject", void 0);
    return GetBackupResponse;
}(SpeakeasyBase));
export { GetBackupResponse };
