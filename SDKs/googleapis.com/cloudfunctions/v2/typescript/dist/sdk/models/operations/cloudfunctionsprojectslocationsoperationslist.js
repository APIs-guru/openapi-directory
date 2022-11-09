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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudfunctionsProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsOperationsListPathParams, _super);
    function CloudfunctionsProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return CloudfunctionsProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsOperationsListPathParams };
var CloudfunctionsProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsOperationsListQueryParams, _super);
    function CloudfunctionsProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsOperationsListQueryParams };
var CloudfunctionsProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsOperationsListSecurity, _super);
    function CloudfunctionsProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsOperationsListSecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsOperationsListSecurity };
var CloudfunctionsProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsOperationsListRequest, _super);
    function CloudfunctionsProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsOperationsListPathParams)
    ], CloudfunctionsProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsOperationsListQueryParams)
    ], CloudfunctionsProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsOperationsListSecurity)
    ], CloudfunctionsProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsOperationsListRequest };
var CloudfunctionsProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsOperationsListResponse, _super);
    function CloudfunctionsProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], CloudfunctionsProjectsLocationsOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsOperationsListResponse };
