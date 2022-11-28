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
var WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams.prototype, "parent", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams.prototype, "uploadProtocol", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity.prototype, "oauth2c", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListQueryParams)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest.prototype, "security", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest };
var WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse = /** @class */ (function (_super) {
    __extends(WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse, _super);
    function WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFindingTypeStatsResponse)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse.prototype, "listFindingTypeStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse.prototype, "statusCode", void 0);
    return WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse;
}(SpeakeasyBase));
export { WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse };
