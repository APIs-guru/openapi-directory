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
export var GetVolumesSortEnum;
(function (GetVolumesSortEnum) {
    GetVolumesSortEnum["Id"] = "id";
    GetVolumesSortEnum["IdAsc"] = "id:asc";
    GetVolumesSortEnum["IdDesc"] = "id:desc";
    GetVolumesSortEnum["Name"] = "name";
    GetVolumesSortEnum["NameAsc"] = "name:asc";
    GetVolumesSortEnum["NameDesc"] = "name:desc";
    GetVolumesSortEnum["Created"] = "created";
    GetVolumesSortEnum["CreatedAsc"] = "created:asc";
    GetVolumesSortEnum["CreatedDesc"] = "created:desc";
})(GetVolumesSortEnum || (GetVolumesSortEnum = {}));
export var GetVolumesStatusEnum;
(function (GetVolumesStatusEnum) {
    GetVolumesStatusEnum["Available"] = "available";
    GetVolumesStatusEnum["Creating"] = "creating";
})(GetVolumesStatusEnum || (GetVolumesStatusEnum = {}));
var GetVolumesQueryParams = /** @class */ (function (_super) {
    __extends(GetVolumesQueryParams, _super);
    function GetVolumesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetVolumesQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetVolumesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVolumesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetVolumesQueryParams.prototype, "status", void 0);
    return GetVolumesQueryParams;
}(SpeakeasyBase));
export { GetVolumesQueryParams };
var GetVolumes200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJsonMetaPagination, _super);
    function GetVolumes200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetVolumes200ApplicationJsonMetaPagination;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJsonMetaPagination };
var GetVolumes200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJsonMeta, _super);
    function GetVolumes200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetVolumes200ApplicationJsonMetaPagination)
    ], GetVolumes200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetVolumes200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJsonMeta };
// GetVolumes200ApplicationJsonVolumesLocation
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
var GetVolumes200ApplicationJsonVolumesLocation = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJsonVolumesLocation, _super);
    function GetVolumes200ApplicationJsonVolumesLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumesLocation.prototype, "networkZone", void 0);
    return GetVolumes200ApplicationJsonVolumesLocation;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJsonVolumesLocation };
// GetVolumes200ApplicationJsonVolumesProtection
/**
 * Protection configuration for the Resource
**/
var GetVolumes200ApplicationJsonVolumesProtection = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJsonVolumesProtection, _super);
    function GetVolumes200ApplicationJsonVolumesProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetVolumes200ApplicationJsonVolumesProtection.prototype, "delete", void 0);
    return GetVolumes200ApplicationJsonVolumesProtection;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJsonVolumesProtection };
export var GetVolumes200ApplicationJsonVolumesStatusEnum;
(function (GetVolumes200ApplicationJsonVolumesStatusEnum) {
    GetVolumes200ApplicationJsonVolumesStatusEnum["Creating"] = "creating";
    GetVolumes200ApplicationJsonVolumesStatusEnum["Available"] = "available";
})(GetVolumes200ApplicationJsonVolumesStatusEnum || (GetVolumes200ApplicationJsonVolumesStatusEnum = {}));
var GetVolumes200ApplicationJsonVolumes = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJsonVolumes, _super);
    function GetVolumes200ApplicationJsonVolumes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linux_device" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "linuxDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetVolumes200ApplicationJsonVolumesLocation)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetVolumes200ApplicationJsonVolumesProtection)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetVolumes200ApplicationJsonVolumes.prototype, "status", void 0);
    return GetVolumes200ApplicationJsonVolumes;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJsonVolumes };
var GetVolumes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVolumes200ApplicationJson, _super);
    function GetVolumes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetVolumes200ApplicationJsonMeta)
    ], GetVolumes200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: GetVolumes200ApplicationJsonVolumes }),
        __metadata("design:type", Array)
    ], GetVolumes200ApplicationJson.prototype, "volumes", void 0);
    return GetVolumes200ApplicationJson;
}(SpeakeasyBase));
export { GetVolumes200ApplicationJson };
var GetVolumesRequest = /** @class */ (function (_super) {
    __extends(GetVolumesRequest, _super);
    function GetVolumesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesQueryParams)
    ], GetVolumesRequest.prototype, "queryParams", void 0);
    return GetVolumesRequest;
}(SpeakeasyBase));
export { GetVolumesRequest };
var GetVolumesResponse = /** @class */ (function (_super) {
    __extends(GetVolumesResponse, _super);
    function GetVolumesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVolumesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumes200ApplicationJson)
    ], GetVolumesResponse.prototype, "getVolumes200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVolumesResponse.prototype, "statusCode", void 0);
    return GetVolumesResponse;
}(SpeakeasyBase));
export { GetVolumesResponse };
