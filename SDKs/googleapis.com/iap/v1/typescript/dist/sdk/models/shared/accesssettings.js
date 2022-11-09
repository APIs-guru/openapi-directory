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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedDomainsSettings } from "./alloweddomainssettings";
import { CorsSettings } from "./corssettings";
import { GcipSettings } from "./gcipsettings";
import { OAuthSettings } from "./oauthsettings";
import { PolicyDelegationSettings } from "./policydelegationsettings";
import { ReauthSettings } from "./reauthsettings";
// AccessSettings
/**
 * Access related settings for IAP protected apps.
**/
var AccessSettings = /** @class */ (function (_super) {
    __extends(AccessSettings, _super);
    function AccessSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowedDomainsSettings" }),
        __metadata("design:type", AllowedDomainsSettings)
    ], AccessSettings.prototype, "allowedDomainsSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=corsSettings" }),
        __metadata("design:type", CorsSettings)
    ], AccessSettings.prototype, "corsSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=gcipSettings" }),
        __metadata("design:type", GcipSettings)
    ], AccessSettings.prototype, "gcipSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=oauthSettings" }),
        __metadata("design:type", OAuthSettings)
    ], AccessSettings.prototype, "oauthSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=policyDelegationSettings" }),
        __metadata("design:type", PolicyDelegationSettings)
    ], AccessSettings.prototype, "policyDelegationSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=reauthSettings" }),
        __metadata("design:type", ReauthSettings)
    ], AccessSettings.prototype, "reauthSettings", void 0);
    return AccessSettings;
}(SpeakeasyBase));
export { AccessSettings };
