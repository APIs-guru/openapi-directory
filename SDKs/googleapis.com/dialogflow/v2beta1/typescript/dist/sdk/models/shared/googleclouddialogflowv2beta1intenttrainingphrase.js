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
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart } from "./googleclouddialogflowv2beta1intenttrainingphrasepart";
export var GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
(function (GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum) {
    GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum["Example"] = "EXAMPLE";
    GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum["Template"] = "TEMPLATE";
})(GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum || (GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum = {}));
// GoogleCloudDialogflowV2beta1IntentTrainingPhrase
/**
 * Represents an example that the agent is trained on.
**/
var GoogleCloudDialogflowV2beta1IntentTrainingPhrase = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1IntentTrainingPhrase, _super);
    function GoogleCloudDialogflowV2beta1IntentTrainingPhrase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentTrainingPhrase.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parts", elemType: GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentTrainingPhrase.prototype, "parts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timesAddedCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1IntentTrainingPhrase.prototype, "timesAddedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentTrainingPhrase.prototype, "type", void 0);
    return GoogleCloudDialogflowV2beta1IntentTrainingPhrase;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1IntentTrainingPhrase };
