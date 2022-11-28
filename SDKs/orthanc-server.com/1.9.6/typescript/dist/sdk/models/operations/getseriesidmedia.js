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
var GetSeriesIdMediaPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdMediaPathParams, _super);
    function GetSeriesIdMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdMediaPathParams.prototype, "id", void 0);
    return GetSeriesIdMediaPathParams;
}(SpeakeasyBase));
export { GetSeriesIdMediaPathParams };
var GetSeriesIdMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdMediaQueryParams, _super);
    function GetSeriesIdMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extended" }),
        __metadata("design:type", String)
    ], GetSeriesIdMediaQueryParams.prototype, "extended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcode" }),
        __metadata("design:type", String)
    ], GetSeriesIdMediaQueryParams.prototype, "transcode", void 0);
    return GetSeriesIdMediaQueryParams;
}(SpeakeasyBase));
export { GetSeriesIdMediaQueryParams };
var GetSeriesIdMediaRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdMediaRequest, _super);
    function GetSeriesIdMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdMediaPathParams)
    ], GetSeriesIdMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdMediaQueryParams)
    ], GetSeriesIdMediaRequest.prototype, "queryParams", void 0);
    return GetSeriesIdMediaRequest;
}(SpeakeasyBase));
export { GetSeriesIdMediaRequest };
var GetSeriesIdMediaResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdMediaResponse, _super);
    function GetSeriesIdMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSeriesIdMediaResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSeriesIdMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdMediaResponse.prototype, "statusCode", void 0);
    return GetSeriesIdMediaResponse;
}(SpeakeasyBase));
export { GetSeriesIdMediaResponse };
