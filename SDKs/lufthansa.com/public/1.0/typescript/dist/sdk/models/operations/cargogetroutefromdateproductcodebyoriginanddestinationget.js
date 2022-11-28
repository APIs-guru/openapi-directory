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
export var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
(function (CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum) {
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fan"] = "FAN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fco"] = "FCO";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fcp"] = "FCP";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fdg"] = "FDG";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ftf"] = "FTF";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fun"] = "FUN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Fwn"] = "FWN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Yco"] = "YCO";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ycp"] = "YCP";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ydg"] = "YDG";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ynb"] = "YNB";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ynz"] = "YNZ";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Ytf"] = "YTF";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Yun"] = "YUN";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Zxb"] = "ZXB";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Zxf"] = "ZXF";
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum["Zxr"] = "ZXR";
})(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum || (CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum = {}));
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromDate" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "fromDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productCode" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams.prototype, "productCode", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;
}(SpeakeasyBase));
export { CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams };
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders.prototype, "accept", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;
}(SpeakeasyBase));
export { CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders };
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity.prototype, "auth", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
}(SpeakeasyBase));
export { CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity };
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest.prototype, "security", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
}(SpeakeasyBase));
export { CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest };
var CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = /** @class */ (function (_super) {
    __extends(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse, _super);
    function CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse.prototype, "cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse.prototype, "statusCode", void 0);
    return CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;
}(SpeakeasyBase));
export { CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse };
