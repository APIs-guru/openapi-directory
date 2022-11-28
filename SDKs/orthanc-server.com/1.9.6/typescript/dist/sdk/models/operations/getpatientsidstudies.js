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
var GetPatientsIdStudiesPathParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdStudiesPathParams, _super);
    function GetPatientsIdStudiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPatientsIdStudiesPathParams.prototype, "id", void 0);
    return GetPatientsIdStudiesPathParams;
}(SpeakeasyBase));
export { GetPatientsIdStudiesPathParams };
var GetPatientsIdStudiesQueryParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdStudiesQueryParams, _super);
    function GetPatientsIdStudiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetPatientsIdStudiesQueryParams.prototype, "full", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetPatientsIdStudiesQueryParams.prototype, "short", void 0);
    return GetPatientsIdStudiesQueryParams;
}(SpeakeasyBase));
export { GetPatientsIdStudiesQueryParams };
var GetPatientsIdStudiesRequest = /** @class */ (function (_super) {
    __extends(GetPatientsIdStudiesRequest, _super);
    function GetPatientsIdStudiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPatientsIdStudiesPathParams)
    ], GetPatientsIdStudiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPatientsIdStudiesQueryParams)
    ], GetPatientsIdStudiesRequest.prototype, "queryParams", void 0);
    return GetPatientsIdStudiesRequest;
}(SpeakeasyBase));
export { GetPatientsIdStudiesRequest };
var GetPatientsIdStudiesResponse = /** @class */ (function (_super) {
    __extends(GetPatientsIdStudiesResponse, _super);
    function GetPatientsIdStudiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPatientsIdStudiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPatientsIdStudiesResponse.prototype, "getPatientsIdStudies200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPatientsIdStudiesResponse.prototype, "statusCode", void 0);
    return GetPatientsIdStudiesResponse;
}(SpeakeasyBase));
export { GetPatientsIdStudiesResponse };
