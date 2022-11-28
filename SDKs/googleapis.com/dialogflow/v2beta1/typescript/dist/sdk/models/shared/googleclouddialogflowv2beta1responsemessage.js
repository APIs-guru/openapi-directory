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
import { GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowv2beta1responsemessageliveagenthandoff";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio } from "./googleclouddialogflowv2beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1ResponseMessageText } from "./googleclouddialogflowv2beta1responsemessagetext";
// GoogleCloudDialogflowV2beta1ResponseMessage
/**
 * Response messages from an automated agent.
**/
var GoogleCloudDialogflowV2beta1ResponseMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1ResponseMessage, _super);
    function GoogleCloudDialogflowV2beta1ResponseMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1ResponseMessage.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff)
    ], GoogleCloudDialogflowV2beta1ResponseMessage.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixedAudio" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio)
    ], GoogleCloudDialogflowV2beta1ResponseMessage.prototype, "mixedAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1ResponseMessage.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall)
    ], GoogleCloudDialogflowV2beta1ResponseMessage.prototype, "telephonyTransferCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1ResponseMessageText)
    ], GoogleCloudDialogflowV2beta1ResponseMessage.prototype, "text", void 0);
    return GoogleCloudDialogflowV2beta1ResponseMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1ResponseMessage };
