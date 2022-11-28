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
var WebsecurityscannerProjectsScanConfigsStartPathParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsStartPathParams, _super);
    function WebsecurityscannerProjectsScanConfigsStartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartPathParams.prototype, "name", void 0);
    return WebsecurityscannerProjectsScanConfigsStartPathParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsStartPathParams };
var WebsecurityscannerProjectsScanConfigsStartQueryParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsStartQueryParams, _super);
    function WebsecurityscannerProjectsScanConfigsStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartQueryParams.prototype, "uploadProtocol", void 0);
    return WebsecurityscannerProjectsScanConfigsStartQueryParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsStartQueryParams };
var WebsecurityscannerProjectsScanConfigsStartSecurity = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsStartSecurity, _super);
    function WebsecurityscannerProjectsScanConfigsStartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebsecurityscannerProjectsScanConfigsStartSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebsecurityscannerProjectsScanConfigsStartSecurity.prototype, "oauth2c", void 0);
    return WebsecurityscannerProjectsScanConfigsStartSecurity;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsStartSecurity };
var WebsecurityscannerProjectsScanConfigsStartRequest = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsStartRequest, _super);
    function WebsecurityscannerProjectsScanConfigsStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsStartPathParams)
    ], WebsecurityscannerProjectsScanConfigsStartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsStartQueryParams)
    ], WebsecurityscannerProjectsScanConfigsStartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], WebsecurityscannerProjectsScanConfigsStartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsStartSecurity)
    ], WebsecurityscannerProjectsScanConfigsStartRequest.prototype, "security", void 0);
    return WebsecurityscannerProjectsScanConfigsStartRequest;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsStartRequest };
var WebsecurityscannerProjectsScanConfigsStartResponse = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsStartResponse, _super);
    function WebsecurityscannerProjectsScanConfigsStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScanRun)
    ], WebsecurityscannerProjectsScanConfigsStartResponse.prototype, "scanRun", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebsecurityscannerProjectsScanConfigsStartResponse.prototype, "statusCode", void 0);
    return WebsecurityscannerProjectsScanConfigsStartResponse;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsStartResponse };
