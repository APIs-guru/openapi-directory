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
import { GoogleCloudDialogflowCxV3ConversationTurnUserInput } from "./googleclouddialogflowcxv3conversationturnuserinput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";
// GoogleCloudDialogflowCxV3ConversationTurnInput
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
var GoogleCloudDialogflowCxV3ConversationTurnInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ConversationTurnInput, _super);
    function GoogleCloudDialogflowCxV3ConversationTurnInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInput" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ConversationTurnUserInput)
    ], GoogleCloudDialogflowCxV3ConversationTurnInput.prototype, "userInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualAgentOutput" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput)
    ], GoogleCloudDialogflowCxV3ConversationTurnInput.prototype, "virtualAgentOutput", void 0);
    return GoogleCloudDialogflowCxV3ConversationTurnInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ConversationTurnInput };
// GoogleCloudDialogflowCxV3ConversationTurn
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
**/
var GoogleCloudDialogflowCxV3ConversationTurn = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ConversationTurn, _super);
    function GoogleCloudDialogflowCxV3ConversationTurn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInput" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ConversationTurnUserInput)
    ], GoogleCloudDialogflowCxV3ConversationTurn.prototype, "userInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualAgentOutput" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput)
    ], GoogleCloudDialogflowCxV3ConversationTurn.prototype, "virtualAgentOutput", void 0);
    return GoogleCloudDialogflowCxV3ConversationTurn;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ConversationTurn };
