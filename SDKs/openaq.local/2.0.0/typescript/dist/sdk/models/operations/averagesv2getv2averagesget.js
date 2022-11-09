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
var AveragesV2GetV2AveragesGetQueryParams = /** @class */ (function (_super) {
    __extends(AveragesV2GetV2AveragesGetQueryParams, _super);
    function AveragesV2GetV2AveragesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Object)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Object)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "dateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", Boolean)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Array)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project_id" }),
        __metadata("design:type", Number)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=spatial" }),
        __metadata("design:type", String)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "spatial", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=temporal" }),
        __metadata("design:type", String)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "temporal", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], AveragesV2GetV2AveragesGetQueryParams.prototype, "unit", void 0);
    return AveragesV2GetV2AveragesGetQueryParams;
}(SpeakeasyBase));
export { AveragesV2GetV2AveragesGetQueryParams };
var AveragesV2GetV2AveragesGetRequest = /** @class */ (function (_super) {
    __extends(AveragesV2GetV2AveragesGetRequest, _super);
    function AveragesV2GetV2AveragesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AveragesV2GetV2AveragesGetQueryParams)
    ], AveragesV2GetV2AveragesGetRequest.prototype, "queryParams", void 0);
    return AveragesV2GetV2AveragesGetRequest;
}(SpeakeasyBase));
export { AveragesV2GetV2AveragesGetRequest };
var AveragesV2GetV2AveragesGetResponse = /** @class */ (function (_super) {
    __extends(AveragesV2GetV2AveragesGetResponse, _super);
    function AveragesV2GetV2AveragesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AveragesV2GetV2AveragesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], AveragesV2GetV2AveragesGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], AveragesV2GetV2AveragesGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AveragesV2GetV2AveragesGetResponse.prototype, "statusCode", void 0);
    return AveragesV2GetV2AveragesGetResponse;
}(SpeakeasyBase));
export { AveragesV2GetV2AveragesGetResponse };
