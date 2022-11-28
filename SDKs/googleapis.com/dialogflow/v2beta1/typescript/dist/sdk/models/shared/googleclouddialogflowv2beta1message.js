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
import { GoogleCloudDialogflowV2beta1MessageAnnotation } from "./googleclouddialogflowv2beta1messageannotation";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";
export var GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum;
(function (GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum) {
    GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum["RoleUnspecified"] = "ROLE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum["HumanAgent"] = "HUMAN_AGENT";
    GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum["AutomatedAgent"] = "AUTOMATED_AGENT";
    GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum["EndUser"] = "END_USER";
})(GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum || (GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum = {}));
// GoogleCloudDialogflowV2beta1Message
/**
 * Represents a message posted into a conversation.
**/
var GoogleCloudDialogflowV2beta1Message = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Message, _super);
    function GoogleCloudDialogflowV2beta1Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageAnnotation" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1MessageAnnotation)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "messageAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "participant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participantRole" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "participantRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "sendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysis" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SentimentAnalysisResult)
    ], GoogleCloudDialogflowV2beta1Message.prototype, "sentimentAnalysis", void 0);
    return GoogleCloudDialogflowV2beta1Message;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Message };
// GoogleCloudDialogflowV2beta1MessageInput
/**
 * Represents a message posted into a conversation.
**/
var GoogleCloudDialogflowV2beta1MessageInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1MessageInput, _super);
    function GoogleCloudDialogflowV2beta1MessageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1MessageInput.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1MessageInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageAnnotation" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1MessageAnnotation)
    ], GoogleCloudDialogflowV2beta1MessageInput.prototype, "messageAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1MessageInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1MessageInput.prototype, "sendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysis" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SentimentAnalysisResult)
    ], GoogleCloudDialogflowV2beta1MessageInput.prototype, "sentimentAnalysis", void 0);
    return GoogleCloudDialogflowV2beta1MessageInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1MessageInput };
