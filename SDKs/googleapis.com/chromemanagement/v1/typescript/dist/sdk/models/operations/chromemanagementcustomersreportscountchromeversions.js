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
var ChromemanagementCustomersReportsCountChromeVersionsPathParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeVersionsPathParams, _super);
    function ChromemanagementCustomersReportsCountChromeVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsPathParams.prototype, "customer", void 0);
    return ChromemanagementCustomersReportsCountChromeVersionsPathParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeVersionsPathParams };
var ChromemanagementCustomersReportsCountChromeVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeVersionsQueryParams, _super);
    function ChromemanagementCustomersReportsCountChromeVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsQueryParams.prototype, "uploadProtocol", void 0);
    return ChromemanagementCustomersReportsCountChromeVersionsQueryParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeVersionsQueryParams };
var ChromemanagementCustomersReportsCountChromeVersionsSecurity = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeVersionsSecurity, _super);
    function ChromemanagementCustomersReportsCountChromeVersionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromemanagementCustomersReportsCountChromeVersionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromemanagementCustomersReportsCountChromeVersionsSecurity.prototype, "oauth2c", void 0);
    return ChromemanagementCustomersReportsCountChromeVersionsSecurity;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeVersionsSecurity };
var ChromemanagementCustomersReportsCountChromeVersionsRequest = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeVersionsRequest, _super);
    function ChromemanagementCustomersReportsCountChromeVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeVersionsPathParams)
    ], ChromemanagementCustomersReportsCountChromeVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeVersionsQueryParams)
    ], ChromemanagementCustomersReportsCountChromeVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeVersionsSecurity)
    ], ChromemanagementCustomersReportsCountChromeVersionsRequest.prototype, "security", void 0);
    return ChromemanagementCustomersReportsCountChromeVersionsRequest;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeVersionsRequest };
var ChromemanagementCustomersReportsCountChromeVersionsResponse = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeVersionsResponse, _super);
    function ChromemanagementCustomersReportsCountChromeVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromeManagementV1CountChromeVersionsResponse)
    ], ChromemanagementCustomersReportsCountChromeVersionsResponse.prototype, "googleChromeManagementV1CountChromeVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsCountChromeVersionsResponse.prototype, "statusCode", void 0);
    return ChromemanagementCustomersReportsCountChromeVersionsResponse;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeVersionsResponse };
