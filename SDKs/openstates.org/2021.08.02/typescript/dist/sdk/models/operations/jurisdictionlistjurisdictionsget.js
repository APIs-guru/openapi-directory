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
var JurisdictionListJurisdictionsGetQueryParams = /** @class */ (function (_super) {
    __extends(JurisdictionListJurisdictionsGetQueryParams, _super);
    function JurisdictionListJurisdictionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], JurisdictionListJurisdictionsGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification" }),
        __metadata("design:type", String)
    ], JurisdictionListJurisdictionsGetQueryParams.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], JurisdictionListJurisdictionsGetQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], JurisdictionListJurisdictionsGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], JurisdictionListJurisdictionsGetQueryParams.prototype, "perPage", void 0);
    return JurisdictionListJurisdictionsGetQueryParams;
}(SpeakeasyBase));
export { JurisdictionListJurisdictionsGetQueryParams };
var JurisdictionListJurisdictionsGetHeaders = /** @class */ (function (_super) {
    __extends(JurisdictionListJurisdictionsGetHeaders, _super);
    function JurisdictionListJurisdictionsGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], JurisdictionListJurisdictionsGetHeaders.prototype, "xApiKey", void 0);
    return JurisdictionListJurisdictionsGetHeaders;
}(SpeakeasyBase));
export { JurisdictionListJurisdictionsGetHeaders };
var JurisdictionListJurisdictionsGetRequest = /** @class */ (function (_super) {
    __extends(JurisdictionListJurisdictionsGetRequest, _super);
    function JurisdictionListJurisdictionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JurisdictionListJurisdictionsGetQueryParams)
    ], JurisdictionListJurisdictionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JurisdictionListJurisdictionsGetHeaders)
    ], JurisdictionListJurisdictionsGetRequest.prototype, "headers", void 0);
    return JurisdictionListJurisdictionsGetRequest;
}(SpeakeasyBase));
export { JurisdictionListJurisdictionsGetRequest };
var JurisdictionListJurisdictionsGetResponse = /** @class */ (function (_super) {
    __extends(JurisdictionListJurisdictionsGetResponse, _super);
    function JurisdictionListJurisdictionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JurisdictionListJurisdictionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], JurisdictionListJurisdictionsGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JurisdictionList)
    ], JurisdictionListJurisdictionsGetResponse.prototype, "jurisdictionList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JurisdictionListJurisdictionsGetResponse.prototype, "statusCode", void 0);
    return JurisdictionListJurisdictionsGetResponse;
}(SpeakeasyBase));
export { JurisdictionListJurisdictionsGetResponse };
