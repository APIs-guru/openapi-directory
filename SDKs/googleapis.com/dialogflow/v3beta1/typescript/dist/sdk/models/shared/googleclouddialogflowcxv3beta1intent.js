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
import { GoogleCloudDialogflowCxV3beta1IntentParameter } from "./googleclouddialogflowcxv3beta1intentparameter";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase } from "./googleclouddialogflowcxv3beta1intenttrainingphrase";
// GoogleCloudDialogflowCxV3beta1Intent
/**
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
**/
var GoogleCloudDialogflowCxV3beta1Intent = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Intent, _super);
    function GoogleCloudDialogflowCxV3beta1Intent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFallback" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "isFallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowCxV3beta1IntentParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Intent.prototype, "trainingPhrases", void 0);
    return GoogleCloudDialogflowCxV3beta1Intent;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Intent };
