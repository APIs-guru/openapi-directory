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
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
// GoogleCloudDialogflowCxV3TransitionRoute
/**
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
var GoogleCloudDialogflowCxV3TransitionRoute = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3TransitionRoute, _super);
    function GoogleCloudDialogflowCxV3TransitionRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRoute.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRoute.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRoute.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetFlow" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRoute.prototype, "targetFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRoute.prototype, "targetPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Fulfillment)
    ], GoogleCloudDialogflowCxV3TransitionRoute.prototype, "triggerFulfillment", void 0);
    return GoogleCloudDialogflowCxV3TransitionRoute;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3TransitionRoute };
// GoogleCloudDialogflowCxV3TransitionRouteInput
/**
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
var GoogleCloudDialogflowCxV3TransitionRouteInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3TransitionRouteInput, _super);
    function GoogleCloudDialogflowCxV3TransitionRouteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRouteInput.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRouteInput.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetFlow" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRouteInput.prototype, "targetFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3TransitionRouteInput.prototype, "targetPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3FulfillmentInput)
    ], GoogleCloudDialogflowCxV3TransitionRouteInput.prototype, "triggerFulfillment", void 0);
    return GoogleCloudDialogflowCxV3TransitionRouteInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3TransitionRouteInput };
