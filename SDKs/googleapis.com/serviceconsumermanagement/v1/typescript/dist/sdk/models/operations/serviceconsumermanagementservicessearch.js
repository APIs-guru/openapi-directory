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
var ServiceconsumermanagementServicesSearchPathParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesSearchPathParams, _super);
    function ServiceconsumermanagementServicesSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchPathParams.prototype, "parent", void 0);
    return ServiceconsumermanagementServicesSearchPathParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesSearchPathParams };
var ServiceconsumermanagementServicesSearchQueryParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesSearchQueryParams, _super);
    function ServiceconsumermanagementServicesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceconsumermanagementServicesSearchQueryParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesSearchQueryParams };
var ServiceconsumermanagementServicesSearchSecurity = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesSearchSecurity, _super);
    function ServiceconsumermanagementServicesSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceconsumermanagementServicesSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceconsumermanagementServicesSearchSecurity.prototype, "oauth2c", void 0);
    return ServiceconsumermanagementServicesSearchSecurity;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesSearchSecurity };
var ServiceconsumermanagementServicesSearchRequest = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesSearchRequest, _super);
    function ServiceconsumermanagementServicesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesSearchPathParams)
    ], ServiceconsumermanagementServicesSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesSearchQueryParams)
    ], ServiceconsumermanagementServicesSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesSearchSecurity)
    ], ServiceconsumermanagementServicesSearchRequest.prototype, "security", void 0);
    return ServiceconsumermanagementServicesSearchRequest;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesSearchRequest };
var ServiceconsumermanagementServicesSearchResponse = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesSearchResponse, _super);
    function ServiceconsumermanagementServicesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchTenancyUnitsResponse)
    ], ServiceconsumermanagementServicesSearchResponse.prototype, "searchTenancyUnitsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesSearchResponse.prototype, "statusCode", void 0);
    return ServiceconsumermanagementServicesSearchResponse;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesSearchResponse };
