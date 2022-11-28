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
var GetLocationsQueryParams = /** @class */ (function (_super) {
    __extends(GetLocationsQueryParams, _super);
    function GetLocationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetLocationsQueryParams.prototype, "name", void 0);
    return GetLocationsQueryParams;
}(SpeakeasyBase));
export { GetLocationsQueryParams };
var GetLocations200ApplicationJsonLocations = /** @class */ (function (_super) {
    __extends(GetLocations200ApplicationJsonLocations, _super);
    function GetLocations200ApplicationJsonLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetLocations200ApplicationJsonLocations.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetLocations200ApplicationJsonLocations.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLocations200ApplicationJsonLocations.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLocations200ApplicationJsonLocations.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetLocations200ApplicationJsonLocations.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetLocations200ApplicationJsonLocations.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLocations200ApplicationJsonLocations.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetLocations200ApplicationJsonLocations.prototype, "networkZone", void 0);
    return GetLocations200ApplicationJsonLocations;
}(SpeakeasyBase));
export { GetLocations200ApplicationJsonLocations };
var GetLocations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLocations200ApplicationJson, _super);
    function GetLocations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations", elemType: GetLocations200ApplicationJsonLocations }),
        __metadata("design:type", Array)
    ], GetLocations200ApplicationJson.prototype, "locations", void 0);
    return GetLocations200ApplicationJson;
}(SpeakeasyBase));
export { GetLocations200ApplicationJson };
var GetLocationsRequest = /** @class */ (function (_super) {
    __extends(GetLocationsRequest, _super);
    function GetLocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocationsQueryParams)
    ], GetLocationsRequest.prototype, "queryParams", void 0);
    return GetLocationsRequest;
}(SpeakeasyBase));
export { GetLocationsRequest };
var GetLocationsResponse = /** @class */ (function (_super) {
    __extends(GetLocationsResponse, _super);
    function GetLocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLocationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocations200ApplicationJson)
    ], GetLocationsResponse.prototype, "getLocations200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLocationsResponse.prototype, "statusCode", void 0);
    return GetLocationsResponse;
}(SpeakeasyBase));
export { GetLocationsResponse };
