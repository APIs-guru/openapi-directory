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
var WorkflowsProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsOperationsListPathParams, _super);
    function WorkflowsProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return WorkflowsProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsOperationsListPathParams };
var WorkflowsProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsOperationsListQueryParams, _super);
    function WorkflowsProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return WorkflowsProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsOperationsListQueryParams };
var WorkflowsProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsOperationsListSecurity, _super);
    function WorkflowsProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WorkflowsProjectsLocationsOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WorkflowsProjectsLocationsOperationsListSecurity.prototype, "oauth2c", void 0);
    return WorkflowsProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsOperationsListSecurity };
var WorkflowsProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsOperationsListRequest, _super);
    function WorkflowsProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkflowsProjectsLocationsOperationsListPathParams)
    ], WorkflowsProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkflowsProjectsLocationsOperationsListQueryParams)
    ], WorkflowsProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkflowsProjectsLocationsOperationsListSecurity)
    ], WorkflowsProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return WorkflowsProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsOperationsListRequest };
var WorkflowsProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(WorkflowsProjectsLocationsOperationsListResponse, _super);
    function WorkflowsProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WorkflowsProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], WorkflowsProjectsLocationsOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkflowsProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return WorkflowsProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { WorkflowsProjectsLocationsOperationsListResponse };
