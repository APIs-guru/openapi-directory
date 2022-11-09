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
var GetStrainTypeDiffUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetStrainTypeDiffUsingGetPathParams, _super);
    function GetStrainTypeDiffUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetStrainTypeDiffUsingGetPathParams.prototype, "dateFromYyyymmdd", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" }),
        __metadata("design:type", String)
    ], GetStrainTypeDiffUsingGetPathParams.prototype, "dateToYyyymmdd", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" }),
        __metadata("design:type", Number)
    ], GetStrainTypeDiffUsingGetPathParams.prototype, "speciesTypeKey", void 0);
    return GetStrainTypeDiffUsingGetPathParams;
}(SpeakeasyBase));
export { GetStrainTypeDiffUsingGetPathParams };
var GetStrainTypeDiffUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetStrainTypeDiffUsingGetRequest, _super);
    function GetStrainTypeDiffUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStrainTypeDiffUsingGetPathParams)
    ], GetStrainTypeDiffUsingGetRequest.prototype, "pathParams", void 0);
    return GetStrainTypeDiffUsingGetRequest;
}(SpeakeasyBase));
export { GetStrainTypeDiffUsingGetRequest };
var GetStrainTypeDiffUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetStrainTypeDiffUsingGetResponse, _super);
    function GetStrainTypeDiffUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStrainTypeDiffUsingGetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStrainTypeDiffUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStrainTypeDiffUsingGetResponse.prototype, "statusCode", void 0);
    return GetStrainTypeDiffUsingGetResponse;
}(SpeakeasyBase));
export { GetStrainTypeDiffUsingGetResponse };
