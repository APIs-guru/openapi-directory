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
var RestoreBackupPathParams = /** @class */ (function (_super) {
    __extends(RestoreBackupPathParams, _super);
    function RestoreBackupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backupId" }),
        __metadata("design:type", Number)
    ], RestoreBackupPathParams.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], RestoreBackupPathParams.prototype, "linodeId", void 0);
    return RestoreBackupPathParams;
}(SpeakeasyBase));
export { RestoreBackupPathParams };
var RestoreBackupRequestBody = /** @class */ (function (_super) {
    __extends(RestoreBackupRequestBody, _super);
    function RestoreBackupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode_id" }),
        __metadata("design:type", Number)
    ], RestoreBackupRequestBody.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], RestoreBackupRequestBody.prototype, "overwrite", void 0);
    return RestoreBackupRequestBody;
}(SpeakeasyBase));
export { RestoreBackupRequestBody };
var RestoreBackupSecurity = /** @class */ (function (_super) {
    __extends(RestoreBackupSecurity, _super);
    function RestoreBackupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], RestoreBackupSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RestoreBackupSecurity.prototype, "oauth", void 0);
    return RestoreBackupSecurity;
}(SpeakeasyBase));
export { RestoreBackupSecurity };
var RestoreBackupDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreBackupDefaultApplicationJson, _super);
    function RestoreBackupDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], RestoreBackupDefaultApplicationJson.prototype, "errors", void 0);
    return RestoreBackupDefaultApplicationJson;
}(SpeakeasyBase));
export { RestoreBackupDefaultApplicationJson };
var RestoreBackupRequest = /** @class */ (function (_super) {
    __extends(RestoreBackupRequest, _super);
    function RestoreBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreBackupPathParams)
    ], RestoreBackupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RestoreBackupRequestBody)
    ], RestoreBackupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreBackupSecurity)
    ], RestoreBackupRequest.prototype, "security", void 0);
    return RestoreBackupRequest;
}(SpeakeasyBase));
export { RestoreBackupRequest };
var RestoreBackupResponse = /** @class */ (function (_super) {
    __extends(RestoreBackupResponse, _super);
    function RestoreBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RestoreBackupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RestoreBackupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RestoreBackupResponse.prototype, "restoreBackup200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreBackupDefaultApplicationJson)
    ], RestoreBackupResponse.prototype, "restoreBackupDefaultApplicationJsonObject", void 0);
    return RestoreBackupResponse;
}(SpeakeasyBase));
export { RestoreBackupResponse };
