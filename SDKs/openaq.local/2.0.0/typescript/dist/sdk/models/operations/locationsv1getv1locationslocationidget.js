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
var Locationsv1GetV1LocationsLocationIdGetPathParams = /** @class */ (function (_super) {
    __extends(Locationsv1GetV1LocationsLocationIdGetPathParams, _super);
    function Locationsv1GetV1LocationsLocationIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" }),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetPathParams.prototype, "locationId", void 0);
    return Locationsv1GetV1LocationsLocationIdGetPathParams;
}(SpeakeasyBase));
export { Locationsv1GetV1LocationsLocationIdGetPathParams };
var Locationsv1GetV1LocationsLocationIdGetQueryParams = /** @class */ (function (_super) {
    __extends(Locationsv1GetV1LocationsLocationIdGetQueryParams, _super);
    function Locationsv1GetV1LocationsLocationIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coordinates" }),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dumpRaw" }),
        __metadata("design:type", Boolean)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "dumpRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_geo" }),
        __metadata("design:type", Boolean)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "hasGeo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturerName" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "manufacturerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], Locationsv1GetV1LocationsLocationIdGetQueryParams.prototype, "unit", void 0);
    return Locationsv1GetV1LocationsLocationIdGetQueryParams;
}(SpeakeasyBase));
export { Locationsv1GetV1LocationsLocationIdGetQueryParams };
var Locationsv1GetV1LocationsLocationIdGetRequest = /** @class */ (function (_super) {
    __extends(Locationsv1GetV1LocationsLocationIdGetRequest, _super);
    function Locationsv1GetV1LocationsLocationIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Locationsv1GetV1LocationsLocationIdGetPathParams)
    ], Locationsv1GetV1LocationsLocationIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Locationsv1GetV1LocationsLocationIdGetQueryParams)
    ], Locationsv1GetV1LocationsLocationIdGetRequest.prototype, "queryParams", void 0);
    return Locationsv1GetV1LocationsLocationIdGetRequest;
}(SpeakeasyBase));
export { Locationsv1GetV1LocationsLocationIdGetRequest };
var Locationsv1GetV1LocationsLocationIdGetResponse = /** @class */ (function (_super) {
    __extends(Locationsv1GetV1LocationsLocationIdGetResponse, _super);
    function Locationsv1GetV1LocationsLocationIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Locationsv1GetV1LocationsLocationIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], Locationsv1GetV1LocationsLocationIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], Locationsv1GetV1LocationsLocationIdGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Locationsv1GetV1LocationsLocationIdGetResponse.prototype, "statusCode", void 0);
    return Locationsv1GetV1LocationsLocationIdGetResponse;
}(SpeakeasyBase));
export { Locationsv1GetV1LocationsLocationIdGetResponse };
