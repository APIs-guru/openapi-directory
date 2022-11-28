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
var GetSeriesIdMetadataPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdMetadataPathParams, _super);
    function GetSeriesIdMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdMetadataPathParams.prototype, "id", void 0);
    return GetSeriesIdMetadataPathParams;
}(SpeakeasyBase));
export { GetSeriesIdMetadataPathParams };
var GetSeriesIdMetadataQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdMetadataQueryParams, _super);
    function GetSeriesIdMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetSeriesIdMetadataQueryParams.prototype, "expand", void 0);
    return GetSeriesIdMetadataQueryParams;
}(SpeakeasyBase));
export { GetSeriesIdMetadataQueryParams };
var GetSeriesIdMetadataRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdMetadataRequest, _super);
    function GetSeriesIdMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdMetadataPathParams)
    ], GetSeriesIdMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdMetadataQueryParams)
    ], GetSeriesIdMetadataRequest.prototype, "queryParams", void 0);
    return GetSeriesIdMetadataRequest;
}(SpeakeasyBase));
export { GetSeriesIdMetadataRequest };
var GetSeriesIdMetadataResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdMetadataResponse, _super);
    function GetSeriesIdMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSeriesIdMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSeriesIdMetadataResponse.prototype, "getSeriesIdMetadata200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdMetadataResponse.prototype, "statusCode", void 0);
    return GetSeriesIdMetadataResponse;
}(SpeakeasyBase));
export { GetSeriesIdMetadataResponse };
