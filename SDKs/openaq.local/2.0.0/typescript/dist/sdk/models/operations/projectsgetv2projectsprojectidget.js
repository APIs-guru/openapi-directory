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
var ProjectsGetV2ProjectsProjectIdGetPathParams = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsProjectIdGetPathParams, _super);
    function ProjectsGetV2ProjectsProjectIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsProjectIdGetPathParams.prototype, "projectId", void 0);
    return ProjectsGetV2ProjectsProjectIdGetPathParams;
}(SpeakeasyBase));
export { ProjectsGetV2ProjectsProjectIdGetPathParams };
var ProjectsGetV2ProjectsProjectIdGetQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsProjectIdGetQueryParams, _super);
    function ProjectsGetV2ProjectsProjectIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], ProjectsGetV2ProjectsProjectIdGetQueryParams.prototype, "unit", void 0);
    return ProjectsGetV2ProjectsProjectIdGetQueryParams;
}(SpeakeasyBase));
export { ProjectsGetV2ProjectsProjectIdGetQueryParams };
var ProjectsGetV2ProjectsProjectIdGetRequest = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsProjectIdGetRequest, _super);
    function ProjectsGetV2ProjectsProjectIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProjectsGetV2ProjectsProjectIdGetPathParams)
    ], ProjectsGetV2ProjectsProjectIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProjectsGetV2ProjectsProjectIdGetQueryParams)
    ], ProjectsGetV2ProjectsProjectIdGetRequest.prototype, "queryParams", void 0);
    return ProjectsGetV2ProjectsProjectIdGetRequest;
}(SpeakeasyBase));
export { ProjectsGetV2ProjectsProjectIdGetRequest };
var ProjectsGetV2ProjectsProjectIdGetResponse = /** @class */ (function (_super) {
    __extends(ProjectsGetV2ProjectsProjectIdGetResponse, _super);
    function ProjectsGetV2ProjectsProjectIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProjectsGetV2ProjectsProjectIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], ProjectsGetV2ProjectsProjectIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqProjectsResult)
    ], ProjectsGetV2ProjectsProjectIdGetResponse.prototype, "openAqProjectsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProjectsGetV2ProjectsProjectIdGetResponse.prototype, "statusCode", void 0);
    return ProjectsGetV2ProjectsProjectIdGetResponse;
}(SpeakeasyBase));
export { ProjectsGetV2ProjectsProjectIdGetResponse };
