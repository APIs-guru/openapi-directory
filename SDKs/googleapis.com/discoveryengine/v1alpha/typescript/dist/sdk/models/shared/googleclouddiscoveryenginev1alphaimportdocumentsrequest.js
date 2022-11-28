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
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource";
export var GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum;
(function (GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum) {
    GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum["ReconciliationModeUnspecified"] = "RECONCILIATION_MODE_UNSPECIFIED";
    GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum["Incremental"] = "INCREMENTAL";
    GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum["Full"] = "FULL";
})(GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum || (GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum = {}));
// GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest
/**
 * Request message for Import methods.
**/
var GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest, _super);
    function GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigquerySource" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaBigQuerySource)
    ], GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest.prototype, "bigquerySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorConfig" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaImportErrorConfig)
    ], GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest.prototype, "errorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsSource" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaGcsSource)
    ], GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest.prototype, "gcsSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineSource" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource)
    ], GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest.prototype, "inlineSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciliationMode" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest.prototype, "reconciliationMode", void 0);
    return GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest;
}(SpeakeasyBase));
export { GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest };
