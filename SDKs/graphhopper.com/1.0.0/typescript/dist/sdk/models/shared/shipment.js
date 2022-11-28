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
import { Stop } from "./stop";
var Shipment = /** @class */ (function (_super) {
    __extends(Shipment, _super);
    function Shipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_vehicles" }),
        __metadata("design:type", Array)
    ], Shipment.prototype, "allowedVehicles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delivery" }),
        __metadata("design:type", Stop)
    ], Shipment.prototype, "delivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disallowed_vehicles" }),
        __metadata("design:type", Array)
    ], Shipment.prototype, "disallowedVehicles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_time_in_vehicle" }),
        __metadata("design:type", Number)
    ], Shipment.prototype, "maxTimeInVehicle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup" }),
        __metadata("design:type", Stop)
    ], Shipment.prototype, "pickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], Shipment.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_skills" }),
        __metadata("design:type", Array)
    ], Shipment.prototype, "requiredSkills", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Array)
    ], Shipment.prototype, "size", void 0);
    return Shipment;
}(SpeakeasyBase));
export { Shipment };
