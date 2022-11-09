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
var DatapipelinesProjectsLocationsListPipelinesPathParams = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsListPipelinesPathParams, _super);
    function DatapipelinesProjectsLocationsListPipelinesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesPathParams.prototype, "parent", void 0);
    return DatapipelinesProjectsLocationsListPipelinesPathParams;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsListPipelinesPathParams };
var DatapipelinesProjectsLocationsListPipelinesQueryParams = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsListPipelinesQueryParams, _super);
    function DatapipelinesProjectsLocationsListPipelinesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesQueryParams.prototype, "uploadProtocol", void 0);
    return DatapipelinesProjectsLocationsListPipelinesQueryParams;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsListPipelinesQueryParams };
var DatapipelinesProjectsLocationsListPipelinesSecurity = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsListPipelinesSecurity, _super);
    function DatapipelinesProjectsLocationsListPipelinesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatapipelinesProjectsLocationsListPipelinesSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatapipelinesProjectsLocationsListPipelinesSecurity.prototype, "oauth2c", void 0);
    return DatapipelinesProjectsLocationsListPipelinesSecurity;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsListPipelinesSecurity };
var DatapipelinesProjectsLocationsListPipelinesRequest = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsListPipelinesRequest, _super);
    function DatapipelinesProjectsLocationsListPipelinesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsListPipelinesPathParams)
    ], DatapipelinesProjectsLocationsListPipelinesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsListPipelinesQueryParams)
    ], DatapipelinesProjectsLocationsListPipelinesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsListPipelinesSecurity)
    ], DatapipelinesProjectsLocationsListPipelinesRequest.prototype, "security", void 0);
    return DatapipelinesProjectsLocationsListPipelinesRequest;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsListPipelinesRequest };
var DatapipelinesProjectsLocationsListPipelinesResponse = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsListPipelinesResponse, _super);
    function DatapipelinesProjectsLocationsListPipelinesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsListPipelinesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudDatapipelinesV1ListPipelinesResponse)
    ], DatapipelinesProjectsLocationsListPipelinesResponse.prototype, "googleCloudDatapipelinesV1ListPipelinesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatapipelinesProjectsLocationsListPipelinesResponse.prototype, "statusCode", void 0);
    return DatapipelinesProjectsLocationsListPipelinesResponse;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsListPipelinesResponse };
