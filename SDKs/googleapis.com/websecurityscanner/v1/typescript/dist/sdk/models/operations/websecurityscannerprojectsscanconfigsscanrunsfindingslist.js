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
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams.prototype, "parent", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams.prototype, "uploadProtocol", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity.prototype, "oauth2c", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingsListQueryParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest.prototype, "security", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFindingsResponse)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse.prototype, "listFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse.prototype, "statusCode", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse };
