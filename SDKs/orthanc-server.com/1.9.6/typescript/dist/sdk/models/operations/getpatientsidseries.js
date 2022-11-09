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
var GetPatientsIdSeriesPathParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdSeriesPathParams, _super);
    function GetPatientsIdSeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPatientsIdSeriesPathParams.prototype, "id", void 0);
    return GetPatientsIdSeriesPathParams;
}(SpeakeasyBase));
export { GetPatientsIdSeriesPathParams };
var GetPatientsIdSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdSeriesQueryParams, _super);
    function GetPatientsIdSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetPatientsIdSeriesQueryParams.prototype, "full", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetPatientsIdSeriesQueryParams.prototype, "short", void 0);
    return GetPatientsIdSeriesQueryParams;
}(SpeakeasyBase));
export { GetPatientsIdSeriesQueryParams };
var GetPatientsIdSeriesRequest = /** @class */ (function (_super) {
    __extends(GetPatientsIdSeriesRequest, _super);
    function GetPatientsIdSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPatientsIdSeriesPathParams)
    ], GetPatientsIdSeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPatientsIdSeriesQueryParams)
    ], GetPatientsIdSeriesRequest.prototype, "queryParams", void 0);
    return GetPatientsIdSeriesRequest;
}(SpeakeasyBase));
export { GetPatientsIdSeriesRequest };
var GetPatientsIdSeriesResponse = /** @class */ (function (_super) {
    __extends(GetPatientsIdSeriesResponse, _super);
    function GetPatientsIdSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPatientsIdSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetPatientsIdSeriesResponse.prototype, "getPatientsIdSeries200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPatientsIdSeriesResponse.prototype, "statusCode", void 0);
    return GetPatientsIdSeriesResponse;
}(SpeakeasyBase));
export { GetPatientsIdSeriesResponse };
