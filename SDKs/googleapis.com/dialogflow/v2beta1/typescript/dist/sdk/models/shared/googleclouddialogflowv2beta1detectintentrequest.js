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
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryInput } from "./googleclouddialogflowv2beta1queryinput";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";
// GoogleCloudDialogflowV2beta1DetectIntentRequest
/**
 * The request to detect user's intent.
**/
var GoogleCloudDialogflowV2beta1DetectIntentRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1DetectIntentRequest, _super);
    function GoogleCloudDialogflowV2beta1DetectIntentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputAudio" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DetectIntentRequest.prototype, "inputAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1OutputAudioConfig)
    ], GoogleCloudDialogflowV2beta1DetectIntentRequest.prototype, "outputAudioConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioConfigMask" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DetectIntentRequest.prototype, "outputAudioConfigMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryInput" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1QueryInput)
    ], GoogleCloudDialogflowV2beta1DetectIntentRequest.prototype, "queryInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParams" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1QueryParameters)
    ], GoogleCloudDialogflowV2beta1DetectIntentRequest.prototype, "queryParams", void 0);
    return GoogleCloudDialogflowV2beta1DetectIntentRequest;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1DetectIntentRequest };
