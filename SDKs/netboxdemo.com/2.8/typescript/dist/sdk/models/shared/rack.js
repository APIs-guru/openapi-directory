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
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedRackRole } from "./nestedrackrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export var RackOuterUnitLabelEnum;
(function (RackOuterUnitLabelEnum) {
    RackOuterUnitLabelEnum["Millimeters"] = "Millimeters";
    RackOuterUnitLabelEnum["Inches"] = "Inches";
})(RackOuterUnitLabelEnum || (RackOuterUnitLabelEnum = {}));
export var RackOuterUnitValueEnum;
(function (RackOuterUnitValueEnum) {
    RackOuterUnitValueEnum["Mm"] = "mm";
    RackOuterUnitValueEnum["In"] = "in";
})(RackOuterUnitValueEnum || (RackOuterUnitValueEnum = {}));
var RackOuterUnit = /** @class */ (function (_super) {
    __extends(RackOuterUnit, _super);
    function RackOuterUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], RackOuterUnit.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], RackOuterUnit.prototype, "value", void 0);
    return RackOuterUnit;
}(SpeakeasyBase));
export { RackOuterUnit };
export var RackStatusLabelEnum;
(function (RackStatusLabelEnum) {
    RackStatusLabelEnum["Reserved"] = "Reserved";
    RackStatusLabelEnum["Available"] = "Available";
    RackStatusLabelEnum["Planned"] = "Planned";
    RackStatusLabelEnum["Active"] = "Active";
    RackStatusLabelEnum["Deprecated"] = "Deprecated";
})(RackStatusLabelEnum || (RackStatusLabelEnum = {}));
export var RackStatusValueEnum;
(function (RackStatusValueEnum) {
    RackStatusValueEnum["Reserved"] = "reserved";
    RackStatusValueEnum["Available"] = "available";
    RackStatusValueEnum["Planned"] = "planned";
    RackStatusValueEnum["Active"] = "active";
    RackStatusValueEnum["Deprecated"] = "deprecated";
})(RackStatusValueEnum || (RackStatusValueEnum = {}));
var RackStatus = /** @class */ (function (_super) {
    __extends(RackStatus, _super);
    function RackStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], RackStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], RackStatus.prototype, "value", void 0);
    return RackStatus;
}(SpeakeasyBase));
export { RackStatus };
export var RackTypeLabelEnum;
(function (RackTypeLabelEnum) {
    RackTypeLabelEnum["TwoPostFrame"] = "2-post frame";
    RackTypeLabelEnum["FourPostFrame"] = "4-post frame";
    RackTypeLabelEnum["FourPostCabinet"] = "4-post cabinet";
    RackTypeLabelEnum["WallMountedFrame"] = "Wall-mounted frame";
    RackTypeLabelEnum["WallMountedCabinet"] = "Wall-mounted cabinet";
})(RackTypeLabelEnum || (RackTypeLabelEnum = {}));
export var RackTypeValueEnum;
(function (RackTypeValueEnum) {
    RackTypeValueEnum["TwoPostFrame"] = "2-post-frame";
    RackTypeValueEnum["FourPostFrame"] = "4-post-frame";
    RackTypeValueEnum["FourPostCabinet"] = "4-post-cabinet";
    RackTypeValueEnum["WallFrame"] = "wall-frame";
    RackTypeValueEnum["WallCabinet"] = "wall-cabinet";
})(RackTypeValueEnum || (RackTypeValueEnum = {}));
var RackType = /** @class */ (function (_super) {
    __extends(RackType, _super);
    function RackType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], RackType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], RackType.prototype, "value", void 0);
    return RackType;
}(SpeakeasyBase));
export { RackType };
export var RackWidthLabelEnum;
(function (RackWidthLabelEnum) {
    RackWidthLabelEnum["TenInches"] = "10 inches";
    RackWidthLabelEnum["NineteenInches"] = "19 inches";
    RackWidthLabelEnum["TwentyOneInches"] = "21 inches";
    RackWidthLabelEnum["TwentyThreeInches"] = "23 inches";
})(RackWidthLabelEnum || (RackWidthLabelEnum = {}));
var RackWidth = /** @class */ (function (_super) {
    __extends(RackWidth, _super);
    function RackWidth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], RackWidth.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], RackWidth.prototype, "value", void 0);
    return RackWidth;
}(SpeakeasyBase));
export { RackWidth };
var Rack = /** @class */ (function (_super) {
    __extends(Rack, _super);
    function Rack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_tag" }),
        __metadata("design:type", String)
    ], Rack.prototype, "assetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Rack.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Rack.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], Rack.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desc_units" }),
        __metadata("design:type", Boolean)
    ], Rack.prototype, "descUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_count" }),
        __metadata("design:type", Number)
    ], Rack.prototype, "deviceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], Rack.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facility_id" }),
        __metadata("design:type", String)
    ], Rack.prototype, "facilityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", NestedRackGroup)
    ], Rack.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Rack.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], Rack.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Rack.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outer_depth" }),
        __metadata("design:type", Number)
    ], Rack.prototype, "outerDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outer_unit" }),
        __metadata("design:type", RackOuterUnit)
    ], Rack.prototype, "outerUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outer_width" }),
        __metadata("design:type", Number)
    ], Rack.prototype, "outerWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerfeed_count" }),
        __metadata("design:type", Number)
    ], Rack.prototype, "powerfeedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", NestedRackRole)
    ], Rack.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], Rack.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", NestedSite)
    ], Rack.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", RackStatus)
    ], Rack.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Rack.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", NestedTenant)
    ], Rack.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", RackType)
    ], Rack.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=u_height" }),
        __metadata("design:type", Number)
    ], Rack.prototype, "uHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", RackWidth)
    ], Rack.prototype, "width", void 0);
    return Rack;
}(SpeakeasyBase));
export { Rack };
