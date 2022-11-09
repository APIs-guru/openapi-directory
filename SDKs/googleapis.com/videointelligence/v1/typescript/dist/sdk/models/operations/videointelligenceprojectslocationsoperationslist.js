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
var VideointelligenceProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsListPathParams, _super);
    function VideointelligenceProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return VideointelligenceProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsListPathParams };
var VideointelligenceProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsListQueryParams, _super);
    function VideointelligenceProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return VideointelligenceProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsListQueryParams };
var VideointelligenceProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsListSecurity, _super);
    function VideointelligenceProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VideointelligenceProjectsLocationsOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VideointelligenceProjectsLocationsOperationsListSecurity.prototype, "oauth2c", void 0);
    return VideointelligenceProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsListSecurity };
var VideointelligenceProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsListRequest, _super);
    function VideointelligenceProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceProjectsLocationsOperationsListPathParams)
    ], VideointelligenceProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceProjectsLocationsOperationsListQueryParams)
    ], VideointelligenceProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceProjectsLocationsOperationsListSecurity)
    ], VideointelligenceProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return VideointelligenceProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsListRequest };
var VideointelligenceProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(VideointelligenceProjectsLocationsOperationsListResponse, _super);
    function VideointelligenceProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VideointelligenceProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningListOperationsResponse)
    ], VideointelligenceProjectsLocationsOperationsListResponse.prototype, "googleLongrunningListOperationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VideointelligenceProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return VideointelligenceProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { VideointelligenceProjectsLocationsOperationsListResponse };
