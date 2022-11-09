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
var LatestGetV2LatestGetQueryParams = /** @class */ (function (_super) {
    __extends(LatestGetV2LatestGetQueryParams, _super);
    function LatestGetV2LatestGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=coordinates" }),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetQueryParams.prototype, "coordinates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dumpRaw" }),
        __metadata("design:type", Boolean)
    ], LatestGetV2LatestGetQueryParams.prototype, "dumpRaw", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetQueryParams.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=has_geo" }),
        __metadata("design:type", Boolean)
    ], LatestGetV2LatestGetQueryParams.prototype, "hasGeo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], LatestGetV2LatestGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], LatestGetV2LatestGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location_id" }),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetQueryParams.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=manufacturerName" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "manufacturerName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetQueryParams.prototype, "radius", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], LatestGetV2LatestGetQueryParams.prototype, "unit", void 0);
    return LatestGetV2LatestGetQueryParams;
}(SpeakeasyBase));
export { LatestGetV2LatestGetQueryParams };
var LatestGetV2LatestGetRequest = /** @class */ (function (_super) {
    __extends(LatestGetV2LatestGetRequest, _super);
    function LatestGetV2LatestGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LatestGetV2LatestGetQueryParams)
    ], LatestGetV2LatestGetRequest.prototype, "queryParams", void 0);
    return LatestGetV2LatestGetRequest;
}(SpeakeasyBase));
export { LatestGetV2LatestGetRequest };
var LatestGetV2LatestGetResponse = /** @class */ (function (_super) {
    __extends(LatestGetV2LatestGetResponse, _super);
    function LatestGetV2LatestGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LatestGetV2LatestGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], LatestGetV2LatestGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], LatestGetV2LatestGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LatestGetV2LatestGetResponse.prototype, "statusCode", void 0);
    return LatestGetV2LatestGetResponse;
}(SpeakeasyBase));
export { LatestGetV2LatestGetResponse };
