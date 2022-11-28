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
import { Address } from "./address";
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=break" }),
        __metadata("design:type", Object)
    ], Vehicle.prototype, "break", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earliest_start" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "earliestStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_address" }),
        __metadata("design:type", Address)
    ], Vehicle.prototype, "endAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_end" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "latestEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_activities" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxActivities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_distance" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_driving_time" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxDrivingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_jobs" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "maxJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=min_jobs" }),
        __metadata("design:type", Number)
    ], Vehicle.prototype, "minJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=move_to_end_address" }),
        __metadata("design:type", Boolean)
    ], Vehicle.prototype, "moveToEndAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=return_to_depot" }),
        __metadata("design:type", Boolean)
    ], Vehicle.prototype, "returnToDepot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skills" }),
        __metadata("design:type", Array)
    ], Vehicle.prototype, "skills", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_address" }),
        __metadata("design:type", Address)
    ], Vehicle.prototype, "startAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_id" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "typeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicle_id" }),
        __metadata("design:type", String)
    ], Vehicle.prototype, "vehicleId", void 0);
    return Vehicle;
}(SpeakeasyBase));
export { Vehicle };
