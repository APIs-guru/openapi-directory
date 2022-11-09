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
var GetSeriesIdStudyPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdStudyPathParams, _super);
    function GetSeriesIdStudyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdStudyPathParams.prototype, "id", void 0);
    return GetSeriesIdStudyPathParams;
}(SpeakeasyBase));
export { GetSeriesIdStudyPathParams };
var GetSeriesIdStudyQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdStudyQueryParams, _super);
    function GetSeriesIdStudyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetSeriesIdStudyQueryParams.prototype, "full", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetSeriesIdStudyQueryParams.prototype, "short", void 0);
    return GetSeriesIdStudyQueryParams;
}(SpeakeasyBase));
export { GetSeriesIdStudyQueryParams };
var GetSeriesIdStudyRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdStudyRequest, _super);
    function GetSeriesIdStudyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSeriesIdStudyPathParams)
    ], GetSeriesIdStudyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSeriesIdStudyQueryParams)
    ], GetSeriesIdStudyRequest.prototype, "queryParams", void 0);
    return GetSeriesIdStudyRequest;
}(SpeakeasyBase));
export { GetSeriesIdStudyRequest };
var GetSeriesIdStudyResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdStudyResponse, _super);
    function GetSeriesIdStudyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSeriesIdStudyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSeriesIdStudyResponse.prototype, "getSeriesIdStudy200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdStudyResponse.prototype, "statusCode", void 0);
    return GetSeriesIdStudyResponse;
}(SpeakeasyBase));
export { GetSeriesIdStudyResponse };
