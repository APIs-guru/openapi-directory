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
var IdsProjectsLocationsEndpointsListPathParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsListPathParams, _super);
    function IdsProjectsLocationsEndpointsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListPathParams.prototype, "parent", void 0);
    return IdsProjectsLocationsEndpointsListPathParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsListPathParams };
var IdsProjectsLocationsEndpointsListQueryParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsListQueryParams, _super);
    function IdsProjectsLocationsEndpointsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListQueryParams.prototype, "uploadProtocol", void 0);
    return IdsProjectsLocationsEndpointsListQueryParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsListQueryParams };
var IdsProjectsLocationsEndpointsListSecurity = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsListSecurity, _super);
    function IdsProjectsLocationsEndpointsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdsProjectsLocationsEndpointsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdsProjectsLocationsEndpointsListSecurity.prototype, "oauth2c", void 0);
    return IdsProjectsLocationsEndpointsListSecurity;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsListSecurity };
var IdsProjectsLocationsEndpointsListRequest = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsListRequest, _super);
    function IdsProjectsLocationsEndpointsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsListPathParams)
    ], IdsProjectsLocationsEndpointsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsListQueryParams)
    ], IdsProjectsLocationsEndpointsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsListSecurity)
    ], IdsProjectsLocationsEndpointsListRequest.prototype, "security", void 0);
    return IdsProjectsLocationsEndpointsListRequest;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsListRequest };
var IdsProjectsLocationsEndpointsListResponse = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsListResponse, _super);
    function IdsProjectsLocationsEndpointsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEndpointsResponse)
    ], IdsProjectsLocationsEndpointsListResponse.prototype, "listEndpointsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IdsProjectsLocationsEndpointsListResponse.prototype, "statusCode", void 0);
    return IdsProjectsLocationsEndpointsListResponse;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsListResponse };
