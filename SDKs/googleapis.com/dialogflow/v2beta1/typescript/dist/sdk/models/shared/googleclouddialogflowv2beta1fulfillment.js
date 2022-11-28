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
import { GoogleCloudDialogflowV2beta1FulfillmentFeature } from "./googleclouddialogflowv2beta1fulfillmentfeature";
import { GoogleCloudDialogflowV2beta1FulfillmentGenericWebService } from "./googleclouddialogflowv2beta1fulfillmentgenericwebservice";
// GoogleCloudDialogflowV2beta1Fulfillment
/**
 * By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
**/
var GoogleCloudDialogflowV2beta1Fulfillment = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Fulfillment, _super);
    function GoogleCloudDialogflowV2beta1Fulfillment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Fulfillment.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Fulfillment.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features", elemType: GoogleCloudDialogflowV2beta1FulfillmentFeature }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Fulfillment.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genericWebService" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1FulfillmentGenericWebService)
    ], GoogleCloudDialogflowV2beta1Fulfillment.prototype, "genericWebService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Fulfillment.prototype, "name", void 0);
    return GoogleCloudDialogflowV2beta1Fulfillment;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Fulfillment };
