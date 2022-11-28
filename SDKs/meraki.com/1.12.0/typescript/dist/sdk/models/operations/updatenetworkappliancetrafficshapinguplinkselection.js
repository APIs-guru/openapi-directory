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
var UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams };
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum["Wan1"] = "wan1";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum["Wan2"] = "wan2";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum = {}));
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum["PoorPerformance"] = "poorPerformance";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum["UplinkDown"] = "uplinkDown";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum = {}));
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum["VoIp"] = "VoIP";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum = {}));
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum["Builtin"] = "builtin";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum["Custom"] = "custom";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum = {}));
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass
/**
 * Performance class setting for this uplink preference rule
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtinPerformanceClassName" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass.prototype, "builtinPerformanceClassName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customPerformanceClassId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass.prototype, "customPerformanceClassId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass.prototype, "type", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass };
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum["Wan1"] = "wan1";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum["Wan2"] = "wan2";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum["BestForVoIp"] = "bestForVoIP";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum["LoadBalancing"] = "loadBalancing";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum["DefaultUplink"] = "defaultUplink";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum = {}));
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum["Application"] = "application";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum["Custom"] = "custom";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum = {}));
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination
/**
 * Destination of this custom type traffic filter
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fqdn" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "fqdn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "vlan", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination };
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Udp"] = "udp";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Icmp"] = "icmp";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Any"] = "any";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum = {}));
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource
/**
 * Source of this custom type traffic filter
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "vlan", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource };
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue
/**
 * Value object of this traffic filter
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue.prototype, "source", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters.prototype, "value", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failOverCriterion" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences.prototype, "failOverCriterion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceClass" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences.prototype, "performanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredUplink" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences.prototype, "preferredUplink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficFilters", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences.prototype, "trafficFilters", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences };
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum["Wan1"] = "wan1";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum["Wan2"] = "wan2";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum = {}));
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum["Custom"] = "custom";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum = {}));
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination
/**
 * Destination of this custom type traffic filter
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination.prototype, "port", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination };
export var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
(function (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum) {
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Udp"] = "udp";
    UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum["Any"] = "any";
})(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum || (UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum = {}));
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource
/**
 * Source of this custom type traffic filter
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource.prototype, "vlan", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource };
// UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue
/**
 * Value object of this traffic filter
**/
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue.prototype, "source", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters.prototype, "value", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredUplink" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences.prototype, "preferredUplink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficFilters", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences.prototype, "trafficFilters", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeActiveAutoVpnEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody.prototype, "activeActiveAutoVpnEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultUplink" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody.prototype, "defaultUplink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody.prototype, "loadBalancingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpnTrafficUplinkPreferences", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody.prototype, "vpnTrafficUplinkPreferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wanTrafficUplinkPreferences", elemType: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody.prototype, "wanTrafficUplinkPreferences", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest };
var UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse.prototype, "updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse };
