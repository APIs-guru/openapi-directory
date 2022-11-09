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
import * as shared from "../shared";
var CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams = /** @class */ (function (_super) {
    __extends(CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams, _super);
    function CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=aWBNumber" }),
        __metadata("design:type", String)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams.prototype, "aWbNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=aWBPrefix" }),
        __metadata("design:type", String)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams.prototype, "aWbPrefix", void 0);
    return CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams;
}(SpeakeasyBase));
export { CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams };
var CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders = /** @class */ (function (_super) {
    __extends(CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders, _super);
    function CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders.prototype, "accept", void 0);
    return CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders;
}(SpeakeasyBase));
export { CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders };
var CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity = /** @class */ (function (_super) {
    __extends(CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity, _super);
    function CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity.prototype, "auth", void 0);
    return CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity;
}(SpeakeasyBase));
export { CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity };
var CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest = /** @class */ (function (_super) {
    __extends(CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest, _super);
    function CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest.prototype, "security", void 0);
    return CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest;
}(SpeakeasyBase));
export { CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest };
var CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse = /** @class */ (function (_super) {
    __extends(CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse, _super);
    function CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse.prototype, "cargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse.prototype, "statusCode", void 0);
    return CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse;
}(SpeakeasyBase));
export { CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse };
