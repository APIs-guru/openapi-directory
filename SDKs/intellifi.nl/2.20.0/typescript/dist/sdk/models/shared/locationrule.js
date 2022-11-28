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
import { LocationRuleTypeEnum } from "./locationruletypeenum";
var LocationRuleConditions11 = /** @class */ (function (_super) {
    __extends(LocationRuleConditions11, _super);
    function LocationRuleConditions11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from_location" }),
        __metadata("design:type", Location)
    ], LocationRuleConditions11.prototype, "fromLocation", void 0);
    return LocationRuleConditions11;
}(SpeakeasyBase));
export { LocationRuleConditions11 };
var LocationRuleConditions12 = /** @class */ (function (_super) {
    __extends(LocationRuleConditions12, _super);
    function LocationRuleConditions12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from_location_id" }),
        __metadata("design:type", String)
    ], LocationRuleConditions12.prototype, "fromLocationId", void 0);
    return LocationRuleConditions12;
}(SpeakeasyBase));
export { LocationRuleConditions12 };
var LocationRuleConditions13 = /** @class */ (function (_super) {
    __extends(LocationRuleConditions13, _super);
    function LocationRuleConditions13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from_location_url" }),
        __metadata("design:type", String)
    ], LocationRuleConditions13.prototype, "fromLocationUrl", void 0);
    return LocationRuleConditions13;
}(SpeakeasyBase));
export { LocationRuleConditions13 };
var LocationRuleConditions21 = /** @class */ (function (_super) {
    __extends(LocationRuleConditions21, _super);
    function LocationRuleConditions21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to_location" }),
        __metadata("design:type", Location)
    ], LocationRuleConditions21.prototype, "toLocation", void 0);
    return LocationRuleConditions21;
}(SpeakeasyBase));
export { LocationRuleConditions21 };
var LocationRuleConditions22 = /** @class */ (function (_super) {
    __extends(LocationRuleConditions22, _super);
    function LocationRuleConditions22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to_location_id" }),
        __metadata("design:type", String)
    ], LocationRuleConditions22.prototype, "toLocationId", void 0);
    return LocationRuleConditions22;
}(SpeakeasyBase));
export { LocationRuleConditions22 };
var LocationRuleConditions23 = /** @class */ (function (_super) {
    __extends(LocationRuleConditions23, _super);
    function LocationRuleConditions23() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to_location_url" }),
        __metadata("design:type", String)
    ], LocationRuleConditions23.prototype, "toLocationUrl", void 0);
    return LocationRuleConditions23;
}(SpeakeasyBase));
export { LocationRuleConditions23 };
var LocationRule = /** @class */ (function (_super) {
    __extends(LocationRule, _super);
    function LocationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Object)
    ], LocationRule.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], LocationRule.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LocationRule.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LocationRule.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], LocationRule.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], LocationRule.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_updated" }),
        __metadata("design:type", String)
    ], LocationRule.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LocationRule.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], LocationRule.prototype, "url", void 0);
    return LocationRule;
}(SpeakeasyBase));
export { LocationRule };
