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
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";
// GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData
/**
 * The input data used to train a new `ProcessorVersion`.
**/
var GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData, _super);
    function GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testDocuments" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig)
    ], GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData.prototype, "testDocuments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingDocuments" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig)
    ], GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData.prototype, "trainingDocuments", void 0);
    return GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData };
