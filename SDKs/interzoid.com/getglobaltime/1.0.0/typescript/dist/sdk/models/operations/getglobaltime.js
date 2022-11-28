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
var GetglobaltimeQueryParams = /** @class */ (function (_super) {
    __extends(GetglobaltimeQueryParams, _super);
    function GetglobaltimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetglobaltimeQueryParams.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetglobaltimeQueryParams.prototype, "locale", void 0);
    return GetglobaltimeQueryParams;
}(SpeakeasyBase));
export { GetglobaltimeQueryParams };
var Getglobaltime200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getglobaltime200ApplicationJson, _super);
    function Getglobaltime200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClockTime" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "clockTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentDate" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "currentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentTime" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "currentTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Day" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "day", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hour" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "hour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Locale" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Minute" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "minute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Month" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonthNumber" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "monthNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Second" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "second", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeStamp" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "timeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Weekday" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "weekday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Year" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "year", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Zone" }),
        __metadata("design:type", String)
    ], Getglobaltime200ApplicationJson.prototype, "zone", void 0);
    return Getglobaltime200ApplicationJson;
}(SpeakeasyBase));
export { Getglobaltime200ApplicationJson };
var GetglobaltimeRequest = /** @class */ (function (_super) {
    __extends(GetglobaltimeRequest, _super);
    function GetglobaltimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetglobaltimeQueryParams)
    ], GetglobaltimeRequest.prototype, "queryParams", void 0);
    return GetglobaltimeRequest;
}(SpeakeasyBase));
export { GetglobaltimeRequest };
var GetglobaltimeResponse = /** @class */ (function (_super) {
    __extends(GetglobaltimeResponse, _super);
    function GetglobaltimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetglobaltimeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetglobaltimeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getglobaltime200ApplicationJson)
    ], GetglobaltimeResponse.prototype, "getglobaltime200ApplicationJsonObject", void 0);
    return GetglobaltimeResponse;
}(SpeakeasyBase));
export { GetglobaltimeResponse };
