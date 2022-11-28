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
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryResult } from "./googleclouddialogflowcxv3beta1queryresult";
// GoogleCloudDialogflowCxV3beta1FulfillIntentResponse
/**
 * Response of FulfillIntent
**/
var GoogleCloudDialogflowCxV3beta1FulfillIntentResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1FulfillIntentResponse, _super);
    function GoogleCloudDialogflowCxV3beta1FulfillIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudio" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FulfillIntentResponse.prototype, "outputAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1OutputAudioConfig)
    ], GoogleCloudDialogflowCxV3beta1FulfillIntentResponse.prototype, "outputAudioConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryResult" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1QueryResult)
    ], GoogleCloudDialogflowCxV3beta1FulfillIntentResponse.prototype, "queryResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseId" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FulfillIntentResponse.prototype, "responseId", void 0);
    return GoogleCloudDialogflowCxV3beta1FulfillIntentResponse;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1FulfillIntentResponse };
