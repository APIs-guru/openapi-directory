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
import { Header } from "./header";
import { I18nConfig } from "./i18nconfig";
import { Redirect } from "./redirect";
import { Rewrite } from "./rewrite";
export var ServingConfigAppAssociationEnum;
(function (ServingConfigAppAssociationEnum) {
    ServingConfigAppAssociationEnum["Auto"] = "AUTO";
    ServingConfigAppAssociationEnum["None"] = "NONE";
})(ServingConfigAppAssociationEnum || (ServingConfigAppAssociationEnum = {}));
export var ServingConfigTrailingSlashBehaviorEnum;
(function (ServingConfigTrailingSlashBehaviorEnum) {
    ServingConfigTrailingSlashBehaviorEnum["TrailingSlashBehaviorUnspecified"] = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED";
    ServingConfigTrailingSlashBehaviorEnum["Add"] = "ADD";
    ServingConfigTrailingSlashBehaviorEnum["Remove"] = "REMOVE";
})(ServingConfigTrailingSlashBehaviorEnum || (ServingConfigTrailingSlashBehaviorEnum = {}));
// ServingConfig
/**
 * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
**/
var ServingConfig = /** @class */ (function (_super) {
    __extends(ServingConfig, _super);
    function ServingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appAssociation" }),
        __metadata("design:type", String)
    ], ServingConfig.prototype, "appAssociation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleanUrls" }),
        __metadata("design:type", Boolean)
    ], ServingConfig.prototype, "cleanUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: Header }),
        __metadata("design:type", Array)
    ], ServingConfig.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=i18n" }),
        __metadata("design:type", I18nConfig)
    ], ServingConfig.prototype, "i18n", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirects", elemType: Redirect }),
        __metadata("design:type", Array)
    ], ServingConfig.prototype, "redirects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rewrites", elemType: Rewrite }),
        __metadata("design:type", Array)
    ], ServingConfig.prototype, "rewrites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trailingSlashBehavior" }),
        __metadata("design:type", String)
    ], ServingConfig.prototype, "trailingSlashBehavior", void 0);
    return ServingConfig;
}(SpeakeasyBase));
export { ServingConfig };
