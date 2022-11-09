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
var WorkflowsProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsListPathParams, _super);
    function WorkflowsProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListPathParams.prototype, "name", void 0);
    return WorkflowsProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsListPathParams };
var WorkflowsProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsListQueryParams, _super);
    function WorkflowsProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return WorkflowsProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsListQueryParams };
var WorkflowsProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsListSecurity, _super);
    function WorkflowsProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WorkflowsProjectsLocationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WorkflowsProjectsLocationsListSecurity.prototype, "oauth2c", void 0);
    return WorkflowsProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsListSecurity };
var WorkflowsProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsListRequest, _super);
    function WorkflowsProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowsProjectsLocationsListPathParams)
    ], WorkflowsProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowsProjectsLocationsListQueryParams)
    ], WorkflowsProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WorkflowsProjectsLocationsListSecurity)
    ], WorkflowsProjectsLocationsListRequest.prototype, "security", void 0);
    return WorkflowsProjectsLocationsListRequest;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsListRequest };
var WorkflowsProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsListResponse, _super);
    function WorkflowsProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], WorkflowsProjectsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WorkflowsProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return WorkflowsProjectsLocationsListResponse;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsListResponse };
