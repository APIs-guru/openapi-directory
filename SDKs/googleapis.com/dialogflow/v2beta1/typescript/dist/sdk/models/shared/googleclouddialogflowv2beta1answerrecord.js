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
import { GoogleCloudDialogflowV2beta1AgentAssistantRecord } from "./googleclouddialogflowv2beta1agentassistantrecord";
import { GoogleCloudDialogflowV2beta1AnswerFeedback } from "./googleclouddialogflowv2beta1answerfeedback";
// GoogleCloudDialogflowV2beta1AnswerRecord
/**
 * Answer records are records to manage answer history and feedbacks for Dialogflow. Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - `DetectIntent` intent matching - `DetectIntent` knowledge Answer records are not related to the conversation history in the Dialogflow Console. A Record is generated even when the end-user disables conversation history in the console. Records are created when there's a human agent assistant suggestion generated. A typical workflow for customers provide feedback to an answer is: 1. For human agent assistant, customers get suggestion via ListSuggestions API. Together with the answers, AnswerRecord.name are returned to the customers. 2. The customer uses the AnswerRecord.name to call the UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.
**/
var GoogleCloudDialogflowV2beta1AnswerRecord = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1AnswerRecord, _super);
    function GoogleCloudDialogflowV2beta1AnswerRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentAssistantRecord" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1AgentAssistantRecord)
    ], GoogleCloudDialogflowV2beta1AnswerRecord.prototype, "agentAssistantRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerFeedback" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1AnswerFeedback)
    ], GoogleCloudDialogflowV2beta1AnswerRecord.prototype, "answerFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AnswerRecord.prototype, "name", void 0);
    return GoogleCloudDialogflowV2beta1AnswerRecord;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1AnswerRecord };
