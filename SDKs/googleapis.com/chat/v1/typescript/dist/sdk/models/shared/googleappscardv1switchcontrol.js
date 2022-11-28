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
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
export var GoogleAppsCardV1SwitchControlControlTypeEnum;
(function (GoogleAppsCardV1SwitchControlControlTypeEnum) {
    GoogleAppsCardV1SwitchControlControlTypeEnum["Switch"] = "SWITCH";
    GoogleAppsCardV1SwitchControlControlTypeEnum["Checkbox"] = "CHECKBOX";
    GoogleAppsCardV1SwitchControlControlTypeEnum["CheckBox"] = "CHECK_BOX";
})(GoogleAppsCardV1SwitchControlControlTypeEnum || (GoogleAppsCardV1SwitchControlControlTypeEnum = {}));
// GoogleAppsCardV1SwitchControl
/**
 * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon.
**/
var GoogleAppsCardV1SwitchControl = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1SwitchControl, _super);
    function GoogleAppsCardV1SwitchControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlType" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1SwitchControl.prototype, "controlType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1SwitchControl.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onChangeAction" }),
        __metadata("design:type", GoogleAppsCardV1Action)
    ], GoogleAppsCardV1SwitchControl.prototype, "onChangeAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsCardV1SwitchControl.prototype, "selected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1SwitchControl.prototype, "value", void 0);
    return GoogleAppsCardV1SwitchControl;
}(SpeakeasyBase));
export { GoogleAppsCardV1SwitchControl };
