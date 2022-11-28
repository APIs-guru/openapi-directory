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
var GetDatacentersIdPathParams = /** @class */ (function (_super) {
    __extends(GetDatacentersIdPathParams, _super);
    function GetDatacentersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetDatacentersIdPathParams.prototype, "id", void 0);
    return GetDatacentersIdPathParams;
}(SpeakeasyBase));
export { GetDatacentersIdPathParams };
var GetDatacentersId200ApplicationJsonDatacenterLocation = /** @class */ (function (_super) {
    __extends(GetDatacentersId200ApplicationJsonDatacenterLocation, _super);
    function GetDatacentersId200ApplicationJsonDatacenterLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenterLocation.prototype, "networkZone", void 0);
    return GetDatacentersId200ApplicationJsonDatacenterLocation;
}(SpeakeasyBase));
export { GetDatacentersId200ApplicationJsonDatacenterLocation };
// GetDatacentersId200ApplicationJsonDatacenterServerTypes
/**
 * The Server types the Datacenter can handle
**/
var GetDatacentersId200ApplicationJsonDatacenterServerTypes = /** @class */ (function (_super) {
    __extends(GetDatacentersId200ApplicationJsonDatacenterServerTypes, _super);
    function GetDatacentersId200ApplicationJsonDatacenterServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Array)
    ], GetDatacentersId200ApplicationJsonDatacenterServerTypes.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_migration" }),
        __metadata("design:type", Array)
    ], GetDatacentersId200ApplicationJsonDatacenterServerTypes.prototype, "availableForMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported" }),
        __metadata("design:type", Array)
    ], GetDatacentersId200ApplicationJsonDatacenterServerTypes.prototype, "supported", void 0);
    return GetDatacentersId200ApplicationJsonDatacenterServerTypes;
}(SpeakeasyBase));
export { GetDatacentersId200ApplicationJsonDatacenterServerTypes };
var GetDatacentersId200ApplicationJsonDatacenter = /** @class */ (function (_super) {
    __extends(GetDatacentersId200ApplicationJsonDatacenter, _super);
    function GetDatacentersId200ApplicationJsonDatacenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetDatacentersId200ApplicationJsonDatacenter.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetDatacentersId200ApplicationJsonDatacenterLocation)
    ], GetDatacentersId200ApplicationJsonDatacenter.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatacentersId200ApplicationJsonDatacenter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types" }),
        __metadata("design:type", GetDatacentersId200ApplicationJsonDatacenterServerTypes)
    ], GetDatacentersId200ApplicationJsonDatacenter.prototype, "serverTypes", void 0);
    return GetDatacentersId200ApplicationJsonDatacenter;
}(SpeakeasyBase));
export { GetDatacentersId200ApplicationJsonDatacenter };
var GetDatacentersId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatacentersId200ApplicationJson, _super);
    function GetDatacentersId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenter" }),
        __metadata("design:type", GetDatacentersId200ApplicationJsonDatacenter)
    ], GetDatacentersId200ApplicationJson.prototype, "datacenter", void 0);
    return GetDatacentersId200ApplicationJson;
}(SpeakeasyBase));
export { GetDatacentersId200ApplicationJson };
var GetDatacentersIdRequest = /** @class */ (function (_super) {
    __extends(GetDatacentersIdRequest, _super);
    function GetDatacentersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacentersIdPathParams)
    ], GetDatacentersIdRequest.prototype, "pathParams", void 0);
    return GetDatacentersIdRequest;
}(SpeakeasyBase));
export { GetDatacentersIdRequest };
var GetDatacentersIdResponse = /** @class */ (function (_super) {
    __extends(GetDatacentersIdResponse, _super);
    function GetDatacentersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatacentersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacentersId200ApplicationJson)
    ], GetDatacentersIdResponse.prototype, "getDatacentersId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatacentersIdResponse.prototype, "statusCode", void 0);
    return GetDatacentersIdResponse;
}(SpeakeasyBase));
export { GetDatacentersIdResponse };
