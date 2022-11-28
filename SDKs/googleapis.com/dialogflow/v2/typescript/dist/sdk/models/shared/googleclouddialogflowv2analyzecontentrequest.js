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
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
// GoogleCloudDialogflowV2AnalyzeContentRequest
/**
 * The request message for Participants.AnalyzeContent.
**/
var GoogleCloudDialogflowV2AnalyzeContentRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2AnalyzeContentRequest, _super);
    function GoogleCloudDialogflowV2AnalyzeContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assistQueryParams" }),
        __metadata("design:type", GoogleCloudDialogflowV2AssistQueryParameters)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "assistQueryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cxParameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "cxParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventInput" }),
        __metadata("design:type", GoogleCloudDialogflowV2EventInput)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "eventInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParams" }),
        __metadata("design:type", GoogleCloudDialogflowV2QueryParameters)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyAudioConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2OutputAudioConfig)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "replyAudioConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textInput" }),
        __metadata("design:type", GoogleCloudDialogflowV2TextInput)
    ], GoogleCloudDialogflowV2AnalyzeContentRequest.prototype, "textInput", void 0);
    return GoogleCloudDialogflowV2AnalyzeContentRequest;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2AnalyzeContentRequest };
