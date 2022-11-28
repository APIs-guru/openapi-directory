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
var GetDatacentersQueryParams = /** @class */ (function (_super) {
    __extends(GetDatacentersQueryParams, _super);
    function GetDatacentersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetDatacentersQueryParams.prototype, "name", void 0);
    return GetDatacentersQueryParams;
}(SpeakeasyBase));
export { GetDatacentersQueryParams };
var GetDatacenters200ApplicationJsonDatacentersLocation = /** @class */ (function (_super) {
    __extends(GetDatacenters200ApplicationJsonDatacentersLocation, _super);
    function GetDatacenters200ApplicationJsonDatacentersLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacentersLocation.prototype, "networkZone", void 0);
    return GetDatacenters200ApplicationJsonDatacentersLocation;
}(SpeakeasyBase));
export { GetDatacenters200ApplicationJsonDatacentersLocation };
// GetDatacenters200ApplicationJsonDatacentersServerTypes
/**
 * The Server types the Datacenter can handle
**/
var GetDatacenters200ApplicationJsonDatacentersServerTypes = /** @class */ (function (_super) {
    __extends(GetDatacenters200ApplicationJsonDatacentersServerTypes, _super);
    function GetDatacenters200ApplicationJsonDatacentersServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Array)
    ], GetDatacenters200ApplicationJsonDatacentersServerTypes.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_migration" }),
        __metadata("design:type", Array)
    ], GetDatacenters200ApplicationJsonDatacentersServerTypes.prototype, "availableForMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported" }),
        __metadata("design:type", Array)
    ], GetDatacenters200ApplicationJsonDatacentersServerTypes.prototype, "supported", void 0);
    return GetDatacenters200ApplicationJsonDatacentersServerTypes;
}(SpeakeasyBase));
export { GetDatacenters200ApplicationJsonDatacentersServerTypes };
var GetDatacenters200ApplicationJsonDatacenters = /** @class */ (function (_super) {
    __extends(GetDatacenters200ApplicationJsonDatacenters, _super);
    function GetDatacenters200ApplicationJsonDatacenters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacenters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetDatacenters200ApplicationJsonDatacenters.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetDatacenters200ApplicationJsonDatacentersLocation)
    ], GetDatacenters200ApplicationJsonDatacenters.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDatacenters200ApplicationJsonDatacenters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types" }),
        __metadata("design:type", GetDatacenters200ApplicationJsonDatacentersServerTypes)
    ], GetDatacenters200ApplicationJsonDatacenters.prototype, "serverTypes", void 0);
    return GetDatacenters200ApplicationJsonDatacenters;
}(SpeakeasyBase));
export { GetDatacenters200ApplicationJsonDatacenters };
var GetDatacenters200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatacenters200ApplicationJson, _super);
    function GetDatacenters200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenters", elemType: GetDatacenters200ApplicationJsonDatacenters }),
        __metadata("design:type", Array)
    ], GetDatacenters200ApplicationJson.prototype, "datacenters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendation" }),
        __metadata("design:type", Number)
    ], GetDatacenters200ApplicationJson.prototype, "recommendation", void 0);
    return GetDatacenters200ApplicationJson;
}(SpeakeasyBase));
export { GetDatacenters200ApplicationJson };
var GetDatacentersRequest = /** @class */ (function (_super) {
    __extends(GetDatacentersRequest, _super);
    function GetDatacentersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacentersQueryParams)
    ], GetDatacentersRequest.prototype, "queryParams", void 0);
    return GetDatacentersRequest;
}(SpeakeasyBase));
export { GetDatacentersRequest };
var GetDatacentersResponse = /** @class */ (function (_super) {
    __extends(GetDatacentersResponse, _super);
    function GetDatacentersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatacentersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatacenters200ApplicationJson)
    ], GetDatacentersResponse.prototype, "getDatacenters200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatacentersResponse.prototype, "statusCode", void 0);
    return GetDatacentersResponse;
}(SpeakeasyBase));
export { GetDatacentersResponse };
