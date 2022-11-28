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
import { GoogleCloudDialogflowV2beta1DetectIntentResponse } from "./googleclouddialogflowv2beta1detectintentresponse";
import { GoogleCloudDialogflowV2beta1ResponseMessage } from "./googleclouddialogflowv2beta1responsemessage";
export var GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum;
(function (GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum) {
    GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum["AutomatedAgentReplyTypeUnspecified"] = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum["Partial"] = "PARTIAL";
    GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum["Final"] = "FINAL";
})(GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum || (GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum = {}));
// GoogleCloudDialogflowV2beta1AutomatedAgentReply
/**
 * Represents a response from an automated agent.
**/
var GoogleCloudDialogflowV2beta1AutomatedAgentReply = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1AutomatedAgentReply, _super);
    function GoogleCloudDialogflowV2beta1AutomatedAgentReply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowCancellation" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "allowCancellation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatedAgentReplyType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "automatedAgentReplyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cxCurrentPage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "cxCurrentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cxSessionParameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "cxSessionParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectIntentResponse" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1DetectIntentResponse)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "detectIntentResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "matchConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseMessages", elemType: GoogleCloudDialogflowV2beta1ResponseMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1AutomatedAgentReply.prototype, "responseMessages", void 0);
    return GoogleCloudDialogflowV2beta1AutomatedAgentReply;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1AutomatedAgentReply };
