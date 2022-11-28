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
import { GoogleCloudDialogflowV2MessageAnnotation } from "./googleclouddialogflowv2messageannotation";
import { GoogleCloudDialogflowV2SentimentAnalysisResult } from "./googleclouddialogflowv2sentimentanalysisresult";
export var GoogleCloudDialogflowV2MessageParticipantRoleEnum;
(function (GoogleCloudDialogflowV2MessageParticipantRoleEnum) {
    GoogleCloudDialogflowV2MessageParticipantRoleEnum["RoleUnspecified"] = "ROLE_UNSPECIFIED";
    GoogleCloudDialogflowV2MessageParticipantRoleEnum["HumanAgent"] = "HUMAN_AGENT";
    GoogleCloudDialogflowV2MessageParticipantRoleEnum["AutomatedAgent"] = "AUTOMATED_AGENT";
    GoogleCloudDialogflowV2MessageParticipantRoleEnum["EndUser"] = "END_USER";
})(GoogleCloudDialogflowV2MessageParticipantRoleEnum || (GoogleCloudDialogflowV2MessageParticipantRoleEnum = {}));
// GoogleCloudDialogflowV2Message
/**
 * Represents a message posted into a conversation.
**/
var GoogleCloudDialogflowV2Message = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2Message, _super);
    function GoogleCloudDialogflowV2Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageAnnotation" }),
        __metadata("design:type", GoogleCloudDialogflowV2MessageAnnotation)
    ], GoogleCloudDialogflowV2Message.prototype, "messageAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participant" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "participant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participantRole" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "participantRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Message.prototype, "sendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysis" }),
        __metadata("design:type", GoogleCloudDialogflowV2SentimentAnalysisResult)
    ], GoogleCloudDialogflowV2Message.prototype, "sentimentAnalysis", void 0);
    return GoogleCloudDialogflowV2Message;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2Message };
