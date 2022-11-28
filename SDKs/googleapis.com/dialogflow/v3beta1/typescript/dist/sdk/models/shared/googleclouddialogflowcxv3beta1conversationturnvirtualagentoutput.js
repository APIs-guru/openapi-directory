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
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1TestRunDifference } from "./googleclouddialogflowcxv3beta1testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageText } from "./googleclouddialogflowcxv3beta1responsemessagetext";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
import { GoogleCloudDialogflowCxV3beta1PageInput } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput } from "./googleclouddialogflowcxv3beta1responsemessagetext";
// GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput
/**
 * The output from the virtual agent.
**/
var GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput, _super);
    function GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1Page)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "diagnosticInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=differences", elemType: GoogleCloudDialogflowCxV3beta1TestRunDifference }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "differences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionParameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "sessionParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessageText }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "textResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggeredIntent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1Intent)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput.prototype, "triggeredIntent", void 0);
    return GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput };
// GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput
/**
 * The output from the virtual agent.
**/
var GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput, _super);
    function GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1PageInput)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput.prototype, "diagnosticInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionParameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput.prototype, "sessionParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textResponses", elemType: GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput.prototype, "textResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggeredIntent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1Intent)
    ], GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput.prototype, "triggeredIntent", void 0);
    return GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput };
