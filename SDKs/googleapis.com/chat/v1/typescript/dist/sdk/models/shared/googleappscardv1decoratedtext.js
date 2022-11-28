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
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
import { GoogleAppsCardV1SwitchControl } from "./googleappscardv1switchcontrol";
// GoogleAppsCardV1DecoratedText
/**
 * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
**/
var GoogleAppsCardV1DecoratedText = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1DecoratedText, _super);
    function GoogleAppsCardV1DecoratedText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomLabel" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DecoratedText.prototype, "bottomLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=button" }),
        __metadata("design:type", GoogleAppsCardV1Button)
    ], GoogleAppsCardV1DecoratedText.prototype, "button", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endIcon" }),
        __metadata("design:type", GoogleAppsCardV1Icon)
    ], GoogleAppsCardV1DecoratedText.prototype, "endIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", GoogleAppsCardV1Icon)
    ], GoogleAppsCardV1DecoratedText.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onClick" }),
        __metadata("design:type", GoogleAppsCardV1OnClick)
    ], GoogleAppsCardV1DecoratedText.prototype, "onClick", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIcon" }),
        __metadata("design:type", GoogleAppsCardV1Icon)
    ], GoogleAppsCardV1DecoratedText.prototype, "startIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switchControl" }),
        __metadata("design:type", GoogleAppsCardV1SwitchControl)
    ], GoogleAppsCardV1DecoratedText.prototype, "switchControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DecoratedText.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLabel" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DecoratedText.prototype, "topLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wrapText" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsCardV1DecoratedText.prototype, "wrapText", void 0);
    return GoogleAppsCardV1DecoratedText;
}(SpeakeasyBase));
export { GoogleAppsCardV1DecoratedText };
