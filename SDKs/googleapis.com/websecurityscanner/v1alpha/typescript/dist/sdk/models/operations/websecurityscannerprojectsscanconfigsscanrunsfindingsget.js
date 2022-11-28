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
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams.prototype, "name", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams.prototype, "uploadProtocol", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity.prototype, "oauth2c", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetQueryParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest.prototype, "security", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Finding)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse.prototype, "finding", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse.prototype, "statusCode", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse };
