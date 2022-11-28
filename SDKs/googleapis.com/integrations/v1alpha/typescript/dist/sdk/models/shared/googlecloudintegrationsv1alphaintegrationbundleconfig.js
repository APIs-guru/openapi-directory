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
// GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput
/**
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
var GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrations" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput.prototype, "integrations", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput };
// GoogleCloudIntegrationsV1alphaIntegrationBundleConfig
/**
 * This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
**/
var GoogleCloudIntegrationsV1alphaIntegrationBundleConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationBundleConfig, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationBundleConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrations" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationBundleConfig.prototype, "integrations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationBundleConfig.prototype, "serviceAccount", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationBundleConfig;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationBundleConfig };
