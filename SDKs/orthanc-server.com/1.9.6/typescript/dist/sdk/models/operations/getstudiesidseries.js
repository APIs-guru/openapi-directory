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
var GetStudiesIdSeriesPathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdSeriesPathParams, _super);
    function GetStudiesIdSeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdSeriesPathParams.prototype, "id", void 0);
    return GetStudiesIdSeriesPathParams;
}(SpeakeasyBase));
export { GetStudiesIdSeriesPathParams };
var GetStudiesIdSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdSeriesQueryParams, _super);
    function GetStudiesIdSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdSeriesQueryParams.prototype, "full", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdSeriesQueryParams.prototype, "short", void 0);
    return GetStudiesIdSeriesQueryParams;
}(SpeakeasyBase));
export { GetStudiesIdSeriesQueryParams };
var GetStudiesIdSeriesRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdSeriesRequest, _super);
    function GetStudiesIdSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdSeriesPathParams)
    ], GetStudiesIdSeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdSeriesQueryParams)
    ], GetStudiesIdSeriesRequest.prototype, "queryParams", void 0);
    return GetStudiesIdSeriesRequest;
}(SpeakeasyBase));
export { GetStudiesIdSeriesRequest };
var GetStudiesIdSeriesResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdSeriesResponse, _super);
    function GetStudiesIdSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStudiesIdSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetStudiesIdSeriesResponse.prototype, "getStudiesIdSeries200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdSeriesResponse.prototype, "statusCode", void 0);
    return GetStudiesIdSeriesResponse;
}(SpeakeasyBase));
export { GetStudiesIdSeriesResponse };
