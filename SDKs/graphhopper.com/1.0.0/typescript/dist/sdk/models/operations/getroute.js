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
import * as shared from "../shared";
export var GetRouteAlgorithmEnum;
(function (GetRouteAlgorithmEnum) {
    GetRouteAlgorithmEnum["RoundTrip"] = "round_trip";
    GetRouteAlgorithmEnum["AlternativeRoute"] = "alternative_route";
})(GetRouteAlgorithmEnum || (GetRouteAlgorithmEnum = {}));
export var GetRouteCurbsideEnum;
(function (GetRouteCurbsideEnum) {
    GetRouteCurbsideEnum["Any"] = "any";
    GetRouteCurbsideEnum["Right"] = "right";
    GetRouteCurbsideEnum["Left"] = "left";
})(GetRouteCurbsideEnum || (GetRouteCurbsideEnum = {}));
var GetRouteQueryParams = /** @class */ (function (_super) {
    __extends(GetRouteQueryParams, _super);
    function GetRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=algorithm" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_paths" }),
        __metadata("design:type", Number)
    ], GetRouteQueryParams.prototype, "alternativeRouteMaxPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_share_factor" }),
        __metadata("design:type", Number)
    ], GetRouteQueryParams.prototype, "alternativeRouteMaxShareFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternative_route.max_weight_factor" }),
        __metadata("design:type", Number)
    ], GetRouteQueryParams.prototype, "alternativeRouteMaxWeightFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=avoid" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "avoid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=block_area" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "blockArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calc_points" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "calcPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ch.disable" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "chDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=curbside" }),
        __metadata("design:type", Array)
    ], GetRouteQueryParams.prototype, "curbside", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=details" }),
        __metadata("design:type", Array)
    ], GetRouteQueryParams.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=elevation" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "elevation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading" }),
        __metadata("design:type", Array)
    ], GetRouteQueryParams.prototype, "heading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=heading_penalty" }),
        __metadata("design:type", Number)
    ], GetRouteQueryParams.prototype, "headingPenalty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instructions" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=optimize" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "optimize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pass_through" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "passThrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", Array)
    ], GetRouteQueryParams.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point_hint" }),
        __metadata("design:type", Array)
    ], GetRouteQueryParams.prototype, "pointHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points_encoded" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "pointsEncoded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=round_trip.distance" }),
        __metadata("design:type", Number)
    ], GetRouteQueryParams.prototype, "roundTripDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=round_trip.seed" }),
        __metadata("design:type", Number)
    ], GetRouteQueryParams.prototype, "roundTripSeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=snap_prevention" }),
        __metadata("design:type", Array)
    ], GetRouteQueryParams.prototype, "snapPrevention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=turn_costs" }),
        __metadata("design:type", Boolean)
    ], GetRouteQueryParams.prototype, "turnCosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "vehicle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weighting" }),
        __metadata("design:type", String)
    ], GetRouteQueryParams.prototype, "weighting", void 0);
    return GetRouteQueryParams;
}(SpeakeasyBase));
export { GetRouteQueryParams };
var GetRouteRequest = /** @class */ (function (_super) {
    __extends(GetRouteRequest, _super);
    function GetRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRouteQueryParams)
    ], GetRouteRequest.prototype, "queryParams", void 0);
    return GetRouteRequest;
}(SpeakeasyBase));
export { GetRouteRequest };
var GetRouteResponse = /** @class */ (function (_super) {
    __extends(GetRouteResponse, _super);
    function GetRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GhError)
    ], GetRouteResponse.prototype, "ghError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRouteResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RouteResponse)
    ], GetRouteResponse.prototype, "routeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRouteResponse.prototype, "statusCode", void 0);
    return GetRouteResponse;
}(SpeakeasyBase));
export { GetRouteResponse };
