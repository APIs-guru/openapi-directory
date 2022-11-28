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
import { ContentMatcher } from "./contentmatcher";
import { HttpCheck } from "./httpcheck";
import { InternalChecker } from "./internalchecker";
import { MonitoredResource } from "./monitoredresource";
import { ResourceGroup } from "./resourcegroup";
import { TcpCheck } from "./tcpcheck";
export var UptimeCheckConfigCheckerTypeEnum;
(function (UptimeCheckConfigCheckerTypeEnum) {
    UptimeCheckConfigCheckerTypeEnum["CheckerTypeUnspecified"] = "CHECKER_TYPE_UNSPECIFIED";
    UptimeCheckConfigCheckerTypeEnum["StaticIpCheckers"] = "STATIC_IP_CHECKERS";
    UptimeCheckConfigCheckerTypeEnum["VpcCheckers"] = "VPC_CHECKERS";
})(UptimeCheckConfigCheckerTypeEnum || (UptimeCheckConfigCheckerTypeEnum = {}));
export var UptimeCheckConfigSelectedRegionsEnum;
(function (UptimeCheckConfigSelectedRegionsEnum) {
    UptimeCheckConfigSelectedRegionsEnum["RegionUnspecified"] = "REGION_UNSPECIFIED";
    UptimeCheckConfigSelectedRegionsEnum["Usa"] = "USA";
    UptimeCheckConfigSelectedRegionsEnum["Europe"] = "EUROPE";
    UptimeCheckConfigSelectedRegionsEnum["SouthAmerica"] = "SOUTH_AMERICA";
    UptimeCheckConfigSelectedRegionsEnum["AsiaPacific"] = "ASIA_PACIFIC";
})(UptimeCheckConfigSelectedRegionsEnum || (UptimeCheckConfigSelectedRegionsEnum = {}));
// UptimeCheckConfig
/**
 * This message configures which resources and services to monitor for availability.
**/
var UptimeCheckConfig = /** @class */ (function (_super) {
    __extends(UptimeCheckConfig, _super);
    function UptimeCheckConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkerType" }),
        __metadata("design:type", String)
    ], UptimeCheckConfig.prototype, "checkerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentMatchers", elemType: ContentMatcher }),
        __metadata("design:type", Array)
    ], UptimeCheckConfig.prototype, "contentMatchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UptimeCheckConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpCheck" }),
        __metadata("design:type", HttpCheck)
    ], UptimeCheckConfig.prototype, "httpCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalCheckers", elemType: InternalChecker }),
        __metadata("design:type", Array)
    ], UptimeCheckConfig.prototype, "internalCheckers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isInternal" }),
        __metadata("design:type", Boolean)
    ], UptimeCheckConfig.prototype, "isInternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoredResource" }),
        __metadata("design:type", MonitoredResource)
    ], UptimeCheckConfig.prototype, "monitoredResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UptimeCheckConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], UptimeCheckConfig.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceGroup" }),
        __metadata("design:type", ResourceGroup)
    ], UptimeCheckConfig.prototype, "resourceGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedRegions" }),
        __metadata("design:type", Array)
    ], UptimeCheckConfig.prototype, "selectedRegions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tcpCheck" }),
        __metadata("design:type", TcpCheck)
    ], UptimeCheckConfig.prototype, "tcpCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], UptimeCheckConfig.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], UptimeCheckConfig.prototype, "userLabels", void 0);
    return UptimeCheckConfig;
}(SpeakeasyBase));
export { UptimeCheckConfig };
