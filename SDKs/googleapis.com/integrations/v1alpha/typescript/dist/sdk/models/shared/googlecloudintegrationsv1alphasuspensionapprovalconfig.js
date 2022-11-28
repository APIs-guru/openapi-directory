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
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";
// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput
/**
 * Configurations for approving the Suspension.
**/
var GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput, _super);
    function GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMessage" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddresses" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput.prototype, "emailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput)
    ], GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput.prototype, "expiration", void 0);
    return GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput };
// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig
/**
 * Configurations for approving the Suspension.
**/
var GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig, _super);
    function GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMessage" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddresses" }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.prototype, "emailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration)
    ], GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.prototype, "expiration", void 0);
    return GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig };
