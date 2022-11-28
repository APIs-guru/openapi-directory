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
import * as shared from "../shared";
var GetSchedulesDirectCountriesSecurity = /** @class */ (function (_super) {
    __extends(GetSchedulesDirectCountriesSecurity, _super);
    function GetSchedulesDirectCountriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSchedulesDirectCountriesSecurity.prototype, "customAuthentication", void 0);
    return GetSchedulesDirectCountriesSecurity;
}(SpeakeasyBase));
export { GetSchedulesDirectCountriesSecurity };
var GetSchedulesDirectCountriesRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesDirectCountriesRequest, _super);
    function GetSchedulesDirectCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSchedulesDirectCountriesSecurity)
    ], GetSchedulesDirectCountriesRequest.prototype, "security", void 0);
    return GetSchedulesDirectCountriesRequest;
}(SpeakeasyBase));
export { GetSchedulesDirectCountriesRequest };
var GetSchedulesDirectCountriesResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesDirectCountriesResponse, _super);
    function GetSchedulesDirectCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSchedulesDirectCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSchedulesDirectCountriesResponse.prototype, "getSchedulesDirectCountries200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSchedulesDirectCountriesResponse.prototype, "statusCode", void 0);
    return GetSchedulesDirectCountriesResponse;
}(SpeakeasyBase));
export { GetSchedulesDirectCountriesResponse };
