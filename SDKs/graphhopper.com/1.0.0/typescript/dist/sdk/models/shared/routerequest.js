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
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";
export var RouteRequestAlgorithmEnum;
(function (RouteRequestAlgorithmEnum) {
    RouteRequestAlgorithmEnum["RoundTrip"] = "round_trip";
    RouteRequestAlgorithmEnum["AlternativeRoute"] = "alternative_route";
})(RouteRequestAlgorithmEnum || (RouteRequestAlgorithmEnum = {}));
export var RouteRequestCurbsidesEnum;
(function (RouteRequestCurbsidesEnum) {
    RouteRequestCurbsidesEnum["Any"] = "any";
    RouteRequestCurbsidesEnum["Right"] = "right";
    RouteRequestCurbsidesEnum["Left"] = "left";
})(RouteRequestCurbsidesEnum || (RouteRequestCurbsidesEnum = {}));
var RouteRequest = /** @class */ (function (_super) {
    __extends(RouteRequest, _super);
    function RouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternative_route.max_paths" }),
        __metadata("design:type", Number)
    ], RouteRequest.prototype, "alternativeRouteMaxPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternative_route.max_share_factor" }),
        __metadata("design:type", Number)
    ], RouteRequest.prototype, "alternativeRouteMaxShareFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternative_route.max_weight_factor" }),
        __metadata("design:type", Number)
    ], RouteRequest.prototype, "alternativeRouteMaxWeightFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoid" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "avoid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block_area" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "blockArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calc_points" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "calcPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ch.disable" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "chDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curbsides" }),
        __metadata("design:type", Array)
    ], RouteRequest.prototype, "curbsides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debug" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], RouteRequest.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elevation" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "elevation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heading_penalty" }),
        __metadata("design:type", Number)
    ], RouteRequest.prototype, "headingPenalty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headings" }),
        __metadata("design:type", Array)
    ], RouteRequest.prototype, "headings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructions" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimize" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "optimize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pass_through" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "passThrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=point_hints" }),
        __metadata("design:type", Array)
    ], RouteRequest.prototype, "pointHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points" }),
        __metadata("design:type", Array)
    ], RouteRequest.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points_encoded" }),
        __metadata("design:type", Boolean)
    ], RouteRequest.prototype, "pointsEncoded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=round_trip.distance" }),
        __metadata("design:type", Number)
    ], RouteRequest.prototype, "roundTripDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=round_trip.seed" }),
        __metadata("design:type", Number)
    ], RouteRequest.prototype, "roundTripSeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snap_preventions" }),
        __metadata("design:type", Array)
    ], RouteRequest.prototype, "snapPreventions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vehicle" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "vehicle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weighting" }),
        __metadata("design:type", String)
    ], RouteRequest.prototype, "weighting", void 0);
    return RouteRequest;
}(SpeakeasyBase));
export { RouteRequest };
