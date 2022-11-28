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
var GetApiV1PublicationTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1PublicationTypesQueryParams, _super);
    function GetApiV1PublicationTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" }),
        __metadata("design:type", Number)
    ], GetApiV1PublicationTypesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" }),
        __metadata("design:type", Number)
    ], GetApiV1PublicationTypesQueryParams.prototype, "take", void 0);
    return GetApiV1PublicationTypesQueryParams;
}(SpeakeasyBase));
export { GetApiV1PublicationTypesQueryParams };
var GetApiV1PublicationTypesRequest = /** @class */ (function (_super) {
    __extends(GetApiV1PublicationTypesRequest, _super);
    function GetApiV1PublicationTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1PublicationTypesQueryParams)
    ], GetApiV1PublicationTypesRequest.prototype, "queryParams", void 0);
    return GetApiV1PublicationTypesRequest;
}(SpeakeasyBase));
export { GetApiV1PublicationTypesRequest };
var GetApiV1PublicationTypesResponse = /** @class */ (function (_super) {
    __extends(GetApiV1PublicationTypesResponse, _super);
    function GetApiV1PublicationTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV1PublicationTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1PublicationTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiV1PublicationTypesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublicationTypeSearchResult)
    ], GetApiV1PublicationTypesResponse.prototype, "publicationTypeSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1PublicationTypesResponse.prototype, "statusCode", void 0);
    return GetApiV1PublicationTypesResponse;
}(SpeakeasyBase));
export { GetApiV1PublicationTypesResponse };
