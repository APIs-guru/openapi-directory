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
import { Location } from "./location";
import { GeoCoords } from "./geocoords";
var SpotGetAntennaReportLocations = /** @class */ (function (_super) {
    __extends(SpotGetAntennaReportLocations, _super);
    function SpotGetAntennaReportLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antenna_number" }),
        __metadata("design:type", Number)
    ], SpotGetAntennaReportLocations.prototype, "antennaNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_location" }),
        __metadata("design:type", Location)
    ], SpotGetAntennaReportLocations.prototype, "reportLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_location_id" }),
        __metadata("design:type", String)
    ], SpotGetAntennaReportLocations.prototype, "reportLocationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_location_url" }),
        __metadata("design:type", String)
    ], SpotGetAntennaReportLocations.prototype, "reportLocationUrl", void 0);
    return SpotGetAntennaReportLocations;
}(SpeakeasyBase));
export { SpotGetAntennaReportLocations };
var SpotGet = /** @class */ (function (_super) {
    __extends(SpotGet, _super);
    function SpotGet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antenna_report_locations", elemType: SpotGetAntennaReportLocations }),
        __metadata("design:type", Array)
    ], SpotGet.prototype, "antennaReportLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", Map)
    ], SpotGet.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_request" }),
        __metadata("design:type", Map)
    ], SpotGet.prototype, "configRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geo_coords" }),
        __metadata("design:type", GeoCoords)
    ], SpotGet.prototype, "geoCoords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SpotGet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_online" }),
        __metadata("design:type", Boolean)
    ], SpotGet.prototype, "isOnline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_counter" }),
        __metadata("design:type", Number)
    ], SpotGet.prototype, "requestCounter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=senses" }),
        __metadata("design:type", Map)
    ], SpotGet.prototype, "senses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=senses_request" }),
        __metadata("design:type", Map)
    ], SpotGet.prototype, "sensesRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial_number" }),
        __metadata("design:type", Number)
    ], SpotGet.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], SpotGet.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], SpotGet.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_updated" }),
        __metadata("design:type", String)
    ], SpotGet.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SpotGet.prototype, "url", void 0);
    return SpotGet;
}(SpeakeasyBase));
export { SpotGet };
