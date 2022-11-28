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
var CitiesGetV2CitiesGetQueryParams = /** @class */ (function (_super) {
    __extends(CitiesGetV2CitiesGetQueryParams, _super);
    function CitiesGetV2CitiesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", Array)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], CitiesGetV2CitiesGetQueryParams.prototype, "sort", void 0);
    return CitiesGetV2CitiesGetQueryParams;
}(SpeakeasyBase));
export { CitiesGetV2CitiesGetQueryParams };
var CitiesGetV2CitiesGetRequest = /** @class */ (function (_super) {
    __extends(CitiesGetV2CitiesGetRequest, _super);
    function CitiesGetV2CitiesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CitiesGetV2CitiesGetQueryParams)
    ], CitiesGetV2CitiesGetRequest.prototype, "queryParams", void 0);
    return CitiesGetV2CitiesGetRequest;
}(SpeakeasyBase));
export { CitiesGetV2CitiesGetRequest };
var CitiesGetV2CitiesGetResponse = /** @class */ (function (_super) {
    __extends(CitiesGetV2CitiesGetResponse, _super);
    function CitiesGetV2CitiesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CitiesGetV2CitiesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], CitiesGetV2CitiesGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OpenAqCitiesResult)
    ], CitiesGetV2CitiesGetResponse.prototype, "openAqCitiesResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CitiesGetV2CitiesGetResponse.prototype, "statusCode", void 0);
    return CitiesGetV2CitiesGetResponse;
}(SpeakeasyBase));
export { CitiesGetV2CitiesGetResponse };
