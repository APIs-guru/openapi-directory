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
import { GoogleAppsCardV1ActionParameter } from "./googleappscardv1actionparameter";
export var GoogleAppsCardV1ActionInteractionEnum;
(function (GoogleAppsCardV1ActionInteractionEnum) {
    GoogleAppsCardV1ActionInteractionEnum["InteractionUnspecified"] = "INTERACTION_UNSPECIFIED";
    GoogleAppsCardV1ActionInteractionEnum["OpenDialog"] = "OPEN_DIALOG";
})(GoogleAppsCardV1ActionInteractionEnum || (GoogleAppsCardV1ActionInteractionEnum = {}));
export var GoogleAppsCardV1ActionLoadIndicatorEnum;
(function (GoogleAppsCardV1ActionLoadIndicatorEnum) {
    GoogleAppsCardV1ActionLoadIndicatorEnum["Spinner"] = "SPINNER";
    GoogleAppsCardV1ActionLoadIndicatorEnum["None"] = "NONE";
})(GoogleAppsCardV1ActionLoadIndicatorEnum || (GoogleAppsCardV1ActionLoadIndicatorEnum = {}));
// GoogleAppsCardV1Action
/**
 * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
var GoogleAppsCardV1Action = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1Action, _super);
    function GoogleAppsCardV1Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=function" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1Action.prototype, "function", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interaction" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1Action.prototype, "interaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadIndicator" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1Action.prototype, "loadIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleAppsCardV1ActionParameter }),
        __metadata("design:type", Array)
    ], GoogleAppsCardV1Action.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistValues" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsCardV1Action.prototype, "persistValues", void 0);
    return GoogleAppsCardV1Action;
}(SpeakeasyBase));
export { GoogleAppsCardV1Action };
