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
var RouteResponsePathInstructions = /** @class */ (function (_super) {
    __extends(RouteResponsePathInstructions, _super);
    function RouteResponsePathInstructions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], RouteResponsePathInstructions.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exit_number" }),
        __metadata("design:type", Number)
    ], RouteResponsePathInstructions.prototype, "exitNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Array)
    ], RouteResponsePathInstructions.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sign" }),
        __metadata("design:type", Number)
    ], RouteResponsePathInstructions.prototype, "sign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_name" }),
        __metadata("design:type", String)
    ], RouteResponsePathInstructions.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], RouteResponsePathInstructions.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], RouteResponsePathInstructions.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turn_angle" }),
        __metadata("design:type", Number)
    ], RouteResponsePathInstructions.prototype, "turnAngle", void 0);
    return RouteResponsePathInstructions;
}(SpeakeasyBase));
export { RouteResponsePathInstructions };
var RouteResponsePath = /** @class */ (function (_super) {
    __extends(RouteResponsePath, _super);
    function RouteResponsePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ascend" }),
        __metadata("design:type", Number)
    ], RouteResponsePath.prototype, "ascend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bbox" }),
        __metadata("design:type", Array)
    ], RouteResponsePath.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descend" }),
        __metadata("design:type", Number)
    ], RouteResponsePath.prototype, "descend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Map)
    ], RouteResponsePath.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], RouteResponsePath.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructions", elemType: RouteResponsePathInstructions }),
        __metadata("design:type", Array)
    ], RouteResponsePath.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points" }),
        __metadata("design:type", Map)
    ], RouteResponsePath.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points_encoded" }),
        __metadata("design:type", Boolean)
    ], RouteResponsePath.prototype, "pointsEncoded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points_order" }),
        __metadata("design:type", Array)
    ], RouteResponsePath.prototype, "pointsOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapped_waypoints" }),
        __metadata("design:type", Map)
    ], RouteResponsePath.prototype, "snappedWaypoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], RouteResponsePath.prototype, "time", void 0);
    return RouteResponsePath;
}(SpeakeasyBase));
export { RouteResponsePath };
