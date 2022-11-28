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
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";
// GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
var GoogleCloudDialogflowCxV3beta1TransitionRouteGroup = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TransitionRouteGroup, _super);
    function GoogleCloudDialogflowCxV3beta1TransitionRouteGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TransitionRouteGroup.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TransitionRouteGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRoute }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TransitionRouteGroup.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup };
// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
var GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput, _super);
    function GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput };
