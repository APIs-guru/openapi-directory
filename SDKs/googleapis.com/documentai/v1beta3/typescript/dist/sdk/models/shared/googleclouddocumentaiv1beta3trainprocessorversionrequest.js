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
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
import { GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData } from "./googleclouddocumentaiv1beta3trainprocessorversionrequestinputdata";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";
// GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest
/**
 * Request message for the create processor version method.
**/
var GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest, _super);
    function GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseProcessorVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.prototype, "baseProcessorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentSchema" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentSchema)
    ], GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.prototype, "documentSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputData" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData)
    ], GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.prototype, "inputData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processorVersion" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3ProcessorVersion)
    ], GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.prototype, "processorVersion", void 0);
    return GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest };
