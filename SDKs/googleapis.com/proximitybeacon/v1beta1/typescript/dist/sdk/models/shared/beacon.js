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
import { AdvertisedId } from "./advertisedid";
import { EphemeralIdRegistration } from "./ephemeralidregistration";
import { IndoorLevel } from "./indoorlevel";
import { LatLng } from "./latlng";
export var BeaconExpectedStabilityEnum;
(function (BeaconExpectedStabilityEnum) {
    BeaconExpectedStabilityEnum["StabilityUnspecified"] = "STABILITY_UNSPECIFIED";
    BeaconExpectedStabilityEnum["Stable"] = "STABLE";
    BeaconExpectedStabilityEnum["Portable"] = "PORTABLE";
    BeaconExpectedStabilityEnum["Mobile"] = "MOBILE";
    BeaconExpectedStabilityEnum["Roving"] = "ROVING";
})(BeaconExpectedStabilityEnum || (BeaconExpectedStabilityEnum = {}));
export var BeaconStatusEnum;
(function (BeaconStatusEnum) {
    BeaconStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    BeaconStatusEnum["Active"] = "ACTIVE";
    BeaconStatusEnum["Decommissioned"] = "DECOMMISSIONED";
    BeaconStatusEnum["Inactive"] = "INACTIVE";
})(BeaconStatusEnum || (BeaconStatusEnum = {}));
// Beacon
/**
 * Details of a beacon device.
**/
var Beacon = /** @class */ (function (_super) {
    __extends(Beacon, _super);
    function Beacon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertisedId" }),
        __metadata("design:type", AdvertisedId)
    ], Beacon.prototype, "advertisedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beaconName" }),
        __metadata("design:type", String)
    ], Beacon.prototype, "beaconName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Beacon.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ephemeralIdRegistration" }),
        __metadata("design:type", EphemeralIdRegistration)
    ], Beacon.prototype, "ephemeralIdRegistration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedStability" }),
        __metadata("design:type", String)
    ], Beacon.prototype, "expectedStability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indoorLevel" }),
        __metadata("design:type", IndoorLevel)
    ], Beacon.prototype, "indoorLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latLng" }),
        __metadata("design:type", LatLng)
    ], Beacon.prototype, "latLng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeId" }),
        __metadata("design:type", String)
    ], Beacon.prototype, "placeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], Beacon.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioningKey" }),
        __metadata("design:type", String)
    ], Beacon.prototype, "provisioningKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Beacon.prototype, "status", void 0);
    return Beacon;
}(SpeakeasyBase));
export { Beacon };
