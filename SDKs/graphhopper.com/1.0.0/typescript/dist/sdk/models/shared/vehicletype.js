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
export var VehicleTypeNetworkDataProviderEnum;
(function (VehicleTypeNetworkDataProviderEnum) {
    VehicleTypeNetworkDataProviderEnum["Openstreetmap"] = "openstreetmap";
    VehicleTypeNetworkDataProviderEnum["Tomtom"] = "tomtom";
})(VehicleTypeNetworkDataProviderEnum || (VehicleTypeNetworkDataProviderEnum = {}));
var VehicleType = /** @class */ (function (_super) {
    __extends(VehicleType, _super);
    function VehicleType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", Array)
    ], VehicleType.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consider_traffic" }),
        __metadata("design:type", Boolean)
    ], VehicleType.prototype, "considerTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost_per_activation" }),
        __metadata("design:type", Number)
    ], VehicleType.prototype, "costPerActivation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost_per_meter" }),
        __metadata("design:type", Number)
    ], VehicleType.prototype, "costPerMeter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost_per_second" }),
        __metadata("design:type", Number)
    ], VehicleType.prototype, "costPerSecond", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_data_provider" }),
        __metadata("design:type", String)
    ], VehicleType.prototype, "networkDataProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", Map)
    ], VehicleType.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_time_factor" }),
        __metadata("design:type", Number)
    ], VehicleType.prototype, "serviceTimeFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed_factor" }),
        __metadata("design:type", Number)
    ], VehicleType.prototype, "speedFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_id" }),
        __metadata("design:type", String)
    ], VehicleType.prototype, "typeId", void 0);
    return VehicleType;
}(SpeakeasyBase));
export { VehicleType };
