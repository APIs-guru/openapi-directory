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
var EventarcProjectsLocationsTriggersListPathParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersListPathParams, _super);
    function EventarcProjectsLocationsTriggersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListPathParams.prototype, "parent", void 0);
    return EventarcProjectsLocationsTriggersListPathParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersListPathParams };
var EventarcProjectsLocationsTriggersListQueryParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersListQueryParams, _super);
    function EventarcProjectsLocationsTriggersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListQueryParams.prototype, "uploadProtocol", void 0);
    return EventarcProjectsLocationsTriggersListQueryParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersListQueryParams };
var EventarcProjectsLocationsTriggersListSecurity = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersListSecurity, _super);
    function EventarcProjectsLocationsTriggersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EventarcProjectsLocationsTriggersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EventarcProjectsLocationsTriggersListSecurity.prototype, "oauth2c", void 0);
    return EventarcProjectsLocationsTriggersListSecurity;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersListSecurity };
var EventarcProjectsLocationsTriggersListRequest = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersListRequest, _super);
    function EventarcProjectsLocationsTriggersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersListPathParams)
    ], EventarcProjectsLocationsTriggersListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersListQueryParams)
    ], EventarcProjectsLocationsTriggersListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersListSecurity)
    ], EventarcProjectsLocationsTriggersListRequest.prototype, "security", void 0);
    return EventarcProjectsLocationsTriggersListRequest;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersListRequest };
var EventarcProjectsLocationsTriggersListResponse = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersListResponse, _super);
    function EventarcProjectsLocationsTriggersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTriggersResponse)
    ], EventarcProjectsLocationsTriggersListResponse.prototype, "listTriggersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsTriggersListResponse.prototype, "statusCode", void 0);
    return EventarcProjectsLocationsTriggersListResponse;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersListResponse };
