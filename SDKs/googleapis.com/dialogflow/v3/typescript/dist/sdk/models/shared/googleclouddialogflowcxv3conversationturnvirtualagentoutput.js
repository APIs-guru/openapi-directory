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
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3TestRunDifference } from "./googleclouddialogflowcxv3testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3PageInput } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3ResponseMessageTextInput } from "./googleclouddialogflowcxv3responsemessagetext";
// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput
/**
 * The output from the virtual agent.
**/
var GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput, _super);
    function GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Page)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "diagnosticInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=differences", elemType: GoogleCloudDialogflowCxV3TestRunDifference }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "differences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionParameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "sessionParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3ResponseMessageText }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "textResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggeredIntent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Intent)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput.prototype, "triggeredIntent", void 0);
    return GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput };
// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput
/**
 * The output from the virtual agent.
**/
var GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput, _super);
    function GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3PageInput)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput.prototype, "diagnosticInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionParameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput.prototype, "sessionParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3ResponseMessageTextInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput.prototype, "textResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggeredIntent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Intent)
    ], GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput.prototype, "triggeredIntent", void 0);
    return GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput };
