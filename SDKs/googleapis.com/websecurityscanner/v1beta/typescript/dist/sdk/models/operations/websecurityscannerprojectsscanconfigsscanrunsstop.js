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
var WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams.prototype, "name", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams };
var WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams.prototype, "uploadProtocol", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams };
var WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity.prototype, "oauth2c", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity };
var WebsecurityscannerProjectsScanConfigsScanRunsStopRequest = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsStopRequest, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsStopQueryParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopRequest.prototype, "security", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsStopRequest;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsStopRequest };
var WebsecurityscannerProjectsScanConfigsScanRunsStopResponse = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsStopResponse, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScanRun)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopResponse.prototype, "scanRun", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebsecurityscannerProjectsScanConfigsScanRunsStopResponse.prototype, "statusCode", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsStopResponse;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsStopResponse };
