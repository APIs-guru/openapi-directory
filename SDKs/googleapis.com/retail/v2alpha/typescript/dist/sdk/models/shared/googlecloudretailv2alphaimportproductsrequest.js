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
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaProductInputConfigInput } from "./googlecloudretailv2alphaproductinputconfig";
export var GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;
(function (GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum) {
    GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum["ReconciliationModeUnspecified"] = "RECONCILIATION_MODE_UNSPECIFIED";
    GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum["Incremental"] = "INCREMENTAL";
    GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum["Full"] = "FULL";
})(GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum || (GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = {}));
// GoogleCloudRetailV2alphaImportProductsRequestInput
/**
 * Request message for Import methods.
**/
var GoogleCloudRetailV2alphaImportProductsRequestInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaImportProductsRequestInput, _super);
    function GoogleCloudRetailV2alphaImportProductsRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorsConfig" }),
        __metadata("design:type", GoogleCloudRetailV2alphaImportErrorsConfig)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "errorsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GoogleCloudRetailV2alphaProductInputConfigInput)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "notificationPubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciliationMode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "reconciliationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipDefaultBranchProtection" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "skipDefaultBranchProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateMask" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaImportProductsRequestInput.prototype, "updateMask", void 0);
    return GoogleCloudRetailV2alphaImportProductsRequestInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaImportProductsRequestInput };
