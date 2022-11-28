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
export var PermissionAccessModeEnum;
(function (PermissionAccessModeEnum) {
    PermissionAccessModeEnum["View"] = "VIEW";
    PermissionAccessModeEnum["Store"] = "STORE";
    PermissionAccessModeEnum["Query"] = "QUERY";
    PermissionAccessModeEnum["Stream"] = "STREAM";
})(PermissionAccessModeEnum || (PermissionAccessModeEnum = {}));
var PermissionDateRange = /** @class */ (function (_super) {
    __extends(PermissionDateRange, _super);
    function PermissionDateRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], PermissionDateRange.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], PermissionDateRange.prototype, "to", void 0);
    return PermissionDateRange;
}(SpeakeasyBase));
export { PermissionDateRange };
export var PermissionFrequencyUnitEnum;
(function (PermissionFrequencyUnitEnum) {
    PermissionFrequencyUnitEnum["Hour"] = "HOUR";
    PermissionFrequencyUnitEnum["Week"] = "WEEK";
    PermissionFrequencyUnitEnum["Day"] = "DAY";
    PermissionFrequencyUnitEnum["Month"] = "MONTH";
    PermissionFrequencyUnitEnum["Year"] = "YEAR";
})(PermissionFrequencyUnitEnum || (PermissionFrequencyUnitEnum = {}));
var PermissionFrequency = /** @class */ (function (_super) {
    __extends(PermissionFrequency, _super);
    function PermissionFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeats" }),
        __metadata("design:type", Number)
    ], PermissionFrequency.prototype, "repeats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], PermissionFrequency.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], PermissionFrequency.prototype, "value", void 0);
    return PermissionFrequency;
}(SpeakeasyBase));
export { PermissionFrequency };
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessMode" }),
        __metadata("design:type", String)
    ], Permission.prototype, "accessMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataEraseAt" }),
        __metadata("design:type", Date)
    ], Permission.prototype, "dataEraseAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", PermissionDateRange)
    ], Permission.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", PermissionFrequency)
    ], Permission.prototype, "frequency", void 0);
    return Permission;
}(SpeakeasyBase));
export { Permission };
