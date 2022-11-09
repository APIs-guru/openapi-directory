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
var GetcountrystandardQueryParams = /** @class */ (function (_super) {
    __extends(GetcountrystandardQueryParams, _super);
    function GetcountrystandardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetcountrystandardQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetcountrystandardQueryParams.prototype, "license", void 0);
    return GetcountrystandardQueryParams;
}(SpeakeasyBase));
export { GetcountrystandardQueryParams };
var GetcountrystandardRequest = /** @class */ (function (_super) {
    __extends(GetcountrystandardRequest, _super);
    function GetcountrystandardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetcountrystandardQueryParams)
    ], GetcountrystandardRequest.prototype, "queryParams", void 0);
    return GetcountrystandardRequest;
}(SpeakeasyBase));
export { GetcountrystandardRequest };
var Getcountrystandard200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getcountrystandard200ApplicationJson, _super);
    function Getcountrystandard200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getcountrystandard200ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=CountryStandard" }),
        __metadata("design:type", String)
    ], Getcountrystandard200ApplicationJson.prototype, "countryStandard", void 0);
    __decorate([
        Metadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getcountrystandard200ApplicationJson.prototype, "credits", void 0);
    return Getcountrystandard200ApplicationJson;
}(SpeakeasyBase));
export { Getcountrystandard200ApplicationJson };
var GetcountrystandardResponse = /** @class */ (function (_super) {
    __extends(GetcountrystandardResponse, _super);
    function GetcountrystandardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetcountrystandardResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetcountrystandardResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Getcountrystandard200ApplicationJson)
    ], GetcountrystandardResponse.prototype, "getcountrystandard200ApplicationJsonObject", void 0);
    return GetcountrystandardResponse;
}(SpeakeasyBase));
export { GetcountrystandardResponse };
