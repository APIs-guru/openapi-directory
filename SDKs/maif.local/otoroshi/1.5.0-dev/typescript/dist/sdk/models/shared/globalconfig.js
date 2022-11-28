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
import { Webhook } from "./webhook";
import { Auth0Config } from "./auth0config";
import { CleverSettings } from "./cleversettings";
import { ElasticConfig } from "./elasticconfig";
import { IpFiltering } from "./ipfiltering";
import { MailerSettings } from "./mailersettings";
// GlobalConfig
/**
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
**/
var GlobalConfig = /** @class */ (function (_super) {
    __extends(GlobalConfig, _super);
    function GlobalConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertsEmails" }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "alertsEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertsWebhooks", elemType: Webhook }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "alertsWebhooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyticsWebhooks", elemType: Webhook }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "analyticsWebhooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiReadOnly" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "apiReadOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoLinkToDefaultGroup" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "autoLinkToDefaultGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backofficeAuth0Config" }),
        __metadata("design:type", Auth0Config)
    ], GlobalConfig.prototype, "backofficeAuth0Config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleverSettings" }),
        __metadata("design:type", CleverSettings)
    ], GlobalConfig.prototype, "cleverSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elasticReadsConfig" }),
        __metadata("design:type", ElasticConfig)
    ], GlobalConfig.prototype, "elasticReadsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elasticWritesConfigs", elemType: ElasticConfig }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "elasticWritesConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endlessIpAddresses" }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "endlessIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipFiltering" }),
        __metadata("design:type", IpFiltering)
    ], GlobalConfig.prototype, "ipFiltering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitConcurrentRequests" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "limitConcurrentRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lines" }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailerSettings" }),
        __metadata("design:type", MailerSettings)
    ], GlobalConfig.prototype, "mailerSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxConcurrentRequests" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "maxConcurrentRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxHttp10ResponseSize" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "maxHttp10ResponseSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLogsSize" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "maxLogsSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middleFingers" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "middleFingers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perIpThrottlingQuota" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "perIpThrottlingQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateAppsAuth0Config" }),
        __metadata("design:type", Auth0Config)
    ], GlobalConfig.prototype, "privateAppsAuth0Config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamEntityOnly" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "streamEntityOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=throttlingQuota" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "throttlingQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=u2fLoginOnly" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "u2fLoginOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useCircuitBreakers" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "useCircuitBreakers", void 0);
    return GlobalConfig;
}(SpeakeasyBase));
export { GlobalConfig };
