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
var LatestV1GetV1LatestLocationIdGetPathParams = /** @class */ (function (_super) {
    __extends(LatestV1GetV1LatestLocationIdGetPathParams, _super);
    function LatestV1GetV1LatestLocationIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" }),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetPathParams.prototype, "locationId", void 0);
    return LatestV1GetV1LatestLocationIdGetPathParams;
}(SpeakeasyBase));
export { LatestV1GetV1LatestLocationIdGetPathParams };
var LatestV1GetV1LatestLocationIdGetQueryParams = /** @class */ (function (_super) {
    __extends(LatestV1GetV1LatestLocationIdGetQueryParams, _super);
    function LatestV1GetV1LatestLocationIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=coordinates" }),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "coordinates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dumpRaw" }),
        __metadata("design:type", Boolean)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "dumpRaw", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=has_geo" }),
        __metadata("design:type", Boolean)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "hasGeo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=manufacturerName" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "manufacturerName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "radius", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], LatestV1GetV1LatestLocationIdGetQueryParams.prototype, "unit", void 0);
    return LatestV1GetV1LatestLocationIdGetQueryParams;
}(SpeakeasyBase));
export { LatestV1GetV1LatestLocationIdGetQueryParams };
var LatestV1GetV1LatestLocationIdGetRequest = /** @class */ (function (_super) {
    __extends(LatestV1GetV1LatestLocationIdGetRequest, _super);
    function LatestV1GetV1LatestLocationIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LatestV1GetV1LatestLocationIdGetPathParams)
    ], LatestV1GetV1LatestLocationIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LatestV1GetV1LatestLocationIdGetQueryParams)
    ], LatestV1GetV1LatestLocationIdGetRequest.prototype, "queryParams", void 0);
    return LatestV1GetV1LatestLocationIdGetRequest;
}(SpeakeasyBase));
export { LatestV1GetV1LatestLocationIdGetRequest };
var LatestV1GetV1LatestLocationIdGetResponse = /** @class */ (function (_super) {
    __extends(LatestV1GetV1LatestLocationIdGetResponse, _super);
    function LatestV1GetV1LatestLocationIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LatestV1GetV1LatestLocationIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], LatestV1GetV1LatestLocationIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], LatestV1GetV1LatestLocationIdGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LatestV1GetV1LatestLocationIdGetResponse.prototype, "statusCode", void 0);
    return LatestV1GetV1LatestLocationIdGetResponse;
}(SpeakeasyBase));
export { LatestV1GetV1LatestLocationIdGetResponse };
