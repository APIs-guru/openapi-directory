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
var EnableBackupsPathParams = /** @class */ (function (_super) {
    __extends(EnableBackupsPathParams, _super);
    function EnableBackupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], EnableBackupsPathParams.prototype, "linodeId", void 0);
    return EnableBackupsPathParams;
}(SpeakeasyBase));
export { EnableBackupsPathParams };
var EnableBackupsSecurity = /** @class */ (function (_super) {
    __extends(EnableBackupsSecurity, _super);
    function EnableBackupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], EnableBackupsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], EnableBackupsSecurity.prototype, "oauth", void 0);
    return EnableBackupsSecurity;
}(SpeakeasyBase));
export { EnableBackupsSecurity };
var EnableBackupsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(EnableBackupsDefaultApplicationJson, _super);
    function EnableBackupsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], EnableBackupsDefaultApplicationJson.prototype, "errors", void 0);
    return EnableBackupsDefaultApplicationJson;
}(SpeakeasyBase));
export { EnableBackupsDefaultApplicationJson };
var EnableBackupsRequest = /** @class */ (function (_super) {
    __extends(EnableBackupsRequest, _super);
    function EnableBackupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableBackupsPathParams)
    ], EnableBackupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableBackupsSecurity)
    ], EnableBackupsRequest.prototype, "security", void 0);
    return EnableBackupsRequest;
}(SpeakeasyBase));
export { EnableBackupsRequest };
var EnableBackupsResponse = /** @class */ (function (_super) {
    __extends(EnableBackupsResponse, _super);
    function EnableBackupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnableBackupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnableBackupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EnableBackupsResponse.prototype, "enableBackups200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableBackupsDefaultApplicationJson)
    ], EnableBackupsResponse.prototype, "enableBackupsDefaultApplicationJsonObject", void 0);
    return EnableBackupsResponse;
}(SpeakeasyBase));
export { EnableBackupsResponse };
