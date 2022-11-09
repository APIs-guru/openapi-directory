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
var EventarcProjectsLocationsProvidersListPathParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsProvidersListPathParams, _super);
    function EventarcProjectsLocationsProvidersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListPathParams.prototype, "parent", void 0);
    return EventarcProjectsLocationsProvidersListPathParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsProvidersListPathParams };
var EventarcProjectsLocationsProvidersListQueryParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsProvidersListQueryParams, _super);
    function EventarcProjectsLocationsProvidersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListQueryParams.prototype, "uploadProtocol", void 0);
    return EventarcProjectsLocationsProvidersListQueryParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsProvidersListQueryParams };
var EventarcProjectsLocationsProvidersListSecurity = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsProvidersListSecurity, _super);
    function EventarcProjectsLocationsProvidersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EventarcProjectsLocationsProvidersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EventarcProjectsLocationsProvidersListSecurity.prototype, "oauth2c", void 0);
    return EventarcProjectsLocationsProvidersListSecurity;
}(SpeakeasyBase));
export { EventarcProjectsLocationsProvidersListSecurity };
var EventarcProjectsLocationsProvidersListRequest = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsProvidersListRequest, _super);
    function EventarcProjectsLocationsProvidersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsProvidersListPathParams)
    ], EventarcProjectsLocationsProvidersListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsProvidersListQueryParams)
    ], EventarcProjectsLocationsProvidersListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsProvidersListSecurity)
    ], EventarcProjectsLocationsProvidersListRequest.prototype, "security", void 0);
    return EventarcProjectsLocationsProvidersListRequest;
}(SpeakeasyBase));
export { EventarcProjectsLocationsProvidersListRequest };
var EventarcProjectsLocationsProvidersListResponse = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsProvidersListResponse, _super);
    function EventarcProjectsLocationsProvidersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsProvidersListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListProvidersResponse)
    ], EventarcProjectsLocationsProvidersListResponse.prototype, "listProvidersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsProvidersListResponse.prototype, "statusCode", void 0);
    return EventarcProjectsLocationsProvidersListResponse;
}(SpeakeasyBase));
export { EventarcProjectsLocationsProvidersListResponse };
