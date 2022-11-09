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
var GetweatherQueryParams = /** @class */ (function (_super) {
    __extends(GetweatherQueryParams, _super);
    function GetweatherQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetweatherQueryParams.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetweatherQueryParams.prototype, "license", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetweatherQueryParams.prototype, "state", void 0);
    return GetweatherQueryParams;
}(SpeakeasyBase));
export { GetweatherQueryParams };
var GetweatherRequest = /** @class */ (function (_super) {
    __extends(GetweatherRequest, _super);
    function GetweatherRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetweatherQueryParams)
    ], GetweatherRequest.prototype, "queryParams", void 0);
    return GetweatherRequest;
}(SpeakeasyBase));
export { GetweatherRequest };
var Getweather200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getweather200ApplicationJson, _super);
    function Getweather200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        Metadata({ data: "json, name=RelativeHumidity" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "relativeHumidity", void 0);
    __decorate([
        Metadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=TempC" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "tempC", void 0);
    __decorate([
        Metadata({ data: "json, name=TempF" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "tempF", void 0);
    __decorate([
        Metadata({ data: "json, name=VisibilityMiles" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "visibilityMiles", void 0);
    __decorate([
        Metadata({ data: "json, name=Weather" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "weather", void 0);
    __decorate([
        Metadata({ data: "json, name=WindDir" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "windDir", void 0);
    __decorate([
        Metadata({ data: "json, name=WindMPH" }),
        __metadata("design:type", String)
    ], Getweather200ApplicationJson.prototype, "windMph", void 0);
    return Getweather200ApplicationJson;
}(SpeakeasyBase));
export { Getweather200ApplicationJson };
var GetweatherResponse = /** @class */ (function (_super) {
    __extends(GetweatherResponse, _super);
    function GetweatherResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetweatherResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetweatherResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Getweather200ApplicationJson)
    ], GetweatherResponse.prototype, "getweather200ApplicationJsonObject", void 0);
    return GetweatherResponse;
}(SpeakeasyBase));
export { GetweatherResponse };
