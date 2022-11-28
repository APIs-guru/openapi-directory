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
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3beta1webhookservicedirectoryconfig";
// GoogleCloudDialogflowCxV3beta1Webhook
/**
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
var GoogleCloudDialogflowCxV3beta1Webhook = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Webhook, _super);
    function GoogleCloudDialogflowCxV3beta1Webhook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1Webhook.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Webhook.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genericWebService" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1WebhookGenericWebService)
    ], GoogleCloudDialogflowCxV3beta1Webhook.prototype, "genericWebService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Webhook.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDirectory" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig)
    ], GoogleCloudDialogflowCxV3beta1Webhook.prototype, "serviceDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Webhook.prototype, "timeout", void 0);
    return GoogleCloudDialogflowCxV3beta1Webhook;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Webhook };
