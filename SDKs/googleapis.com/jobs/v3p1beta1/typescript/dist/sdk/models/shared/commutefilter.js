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
import { TimeOfDay } from "./timeofday";
import { LatLng } from "./latlng";
export var CommuteFilterCommuteMethodEnum;
(function (CommuteFilterCommuteMethodEnum) {
    CommuteFilterCommuteMethodEnum["CommuteMethodUnspecified"] = "COMMUTE_METHOD_UNSPECIFIED";
    CommuteFilterCommuteMethodEnum["Driving"] = "DRIVING";
    CommuteFilterCommuteMethodEnum["Transit"] = "TRANSIT";
    CommuteFilterCommuteMethodEnum["Walking"] = "WALKING";
    CommuteFilterCommuteMethodEnum["Cycling"] = "CYCLING";
})(CommuteFilterCommuteMethodEnum || (CommuteFilterCommuteMethodEnum = {}));
export var CommuteFilterRoadTrafficEnum;
(function (CommuteFilterRoadTrafficEnum) {
    CommuteFilterRoadTrafficEnum["RoadTrafficUnspecified"] = "ROAD_TRAFFIC_UNSPECIFIED";
    CommuteFilterRoadTrafficEnum["TrafficFree"] = "TRAFFIC_FREE";
    CommuteFilterRoadTrafficEnum["BusyHour"] = "BUSY_HOUR";
})(CommuteFilterRoadTrafficEnum || (CommuteFilterRoadTrafficEnum = {}));
// CommuteFilter
/**
 * Input only. Parameters needed for commute search.
**/
var CommuteFilter = /** @class */ (function (_super) {
    __extends(CommuteFilter, _super);
    function CommuteFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowImpreciseAddresses" }),
        __metadata("design:type", Boolean)
    ], CommuteFilter.prototype, "allowImpreciseAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commuteMethod" }),
        __metadata("design:type", String)
    ], CommuteFilter.prototype, "commuteMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departureTime" }),
        __metadata("design:type", TimeOfDay)
    ], CommuteFilter.prototype, "departureTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roadTraffic" }),
        __metadata("design:type", String)
    ], CommuteFilter.prototype, "roadTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startCoordinates" }),
        __metadata("design:type", LatLng)
    ], CommuteFilter.prototype, "startCoordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=travelDuration" }),
        __metadata("design:type", String)
    ], CommuteFilter.prototype, "travelDuration", void 0);
    return CommuteFilter;
}(SpeakeasyBase));
export { CommuteFilter };
