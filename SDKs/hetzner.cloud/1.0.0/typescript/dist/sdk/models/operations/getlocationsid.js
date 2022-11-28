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
var GetLocationsIdPathParams = /** @class */ (function (_super) {
    __extends(GetLocationsIdPathParams, _super);
    function GetLocationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetLocationsIdPathParams.prototype, "id", void 0);
    return GetLocationsIdPathParams;
}(SpeakeasyBase));
export { GetLocationsIdPathParams };
var GetLocationsId200ApplicationJsonLocation = /** @class */ (function (_super) {
    __extends(GetLocationsId200ApplicationJsonLocation, _super);
    function GetLocationsId200ApplicationJsonLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetLocationsId200ApplicationJsonLocation.prototype, "networkZone", void 0);
    return GetLocationsId200ApplicationJsonLocation;
}(SpeakeasyBase));
export { GetLocationsId200ApplicationJsonLocation };
var GetLocationsId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLocationsId200ApplicationJson, _super);
    function GetLocationsId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetLocationsId200ApplicationJsonLocation)
    ], GetLocationsId200ApplicationJson.prototype, "location", void 0);
    return GetLocationsId200ApplicationJson;
}(SpeakeasyBase));
export { GetLocationsId200ApplicationJson };
var GetLocationsIdRequest = /** @class */ (function (_super) {
    __extends(GetLocationsIdRequest, _super);
    function GetLocationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocationsIdPathParams)
    ], GetLocationsIdRequest.prototype, "pathParams", void 0);
    return GetLocationsIdRequest;
}(SpeakeasyBase));
export { GetLocationsIdRequest };
var GetLocationsIdResponse = /** @class */ (function (_super) {
    __extends(GetLocationsIdResponse, _super);
    function GetLocationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLocationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLocationsId200ApplicationJson)
    ], GetLocationsIdResponse.prototype, "getLocationsId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLocationsIdResponse.prototype, "statusCode", void 0);
    return GetLocationsIdResponse;
}(SpeakeasyBase));
export { GetLocationsIdResponse };
