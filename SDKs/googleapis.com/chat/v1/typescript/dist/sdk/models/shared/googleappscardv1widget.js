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
import { GoogleAppsCardV1ButtonList } from "./googleappscardv1buttonlist";
import { GoogleAppsCardV1DateTimePicker } from "./googleappscardv1datetimepicker";
import { GoogleAppsCardV1DecoratedText } from "./googleappscardv1decoratedtext";
import { GoogleAppsCardV1Grid } from "./googleappscardv1grid";
import { GoogleAppsCardV1Image } from "./googleappscardv1image";
import { GoogleAppsCardV1SelectionInput } from "./googleappscardv1selectioninput";
import { GoogleAppsCardV1TextInput } from "./googleappscardv1textinput";
import { GoogleAppsCardV1TextParagraph } from "./googleappscardv1textparagraph";
// GoogleAppsCardV1Widget
/**
 * Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
**/
var GoogleAppsCardV1Widget = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1Widget, _super);
    function GoogleAppsCardV1Widget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buttonList" }),
        __metadata("design:type", GoogleAppsCardV1ButtonList)
    ], GoogleAppsCardV1Widget.prototype, "buttonList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateTimePicker" }),
        __metadata("design:type", GoogleAppsCardV1DateTimePicker)
    ], GoogleAppsCardV1Widget.prototype, "dateTimePicker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decoratedText" }),
        __metadata("design:type", GoogleAppsCardV1DecoratedText)
    ], GoogleAppsCardV1Widget.prototype, "decoratedText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=divider" }),
        __metadata("design:type", Map)
    ], GoogleAppsCardV1Widget.prototype, "divider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grid" }),
        __metadata("design:type", GoogleAppsCardV1Grid)
    ], GoogleAppsCardV1Widget.prototype, "grid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GoogleAppsCardV1Image)
    ], GoogleAppsCardV1Widget.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionInput" }),
        __metadata("design:type", GoogleAppsCardV1SelectionInput)
    ], GoogleAppsCardV1Widget.prototype, "selectionInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textInput" }),
        __metadata("design:type", GoogleAppsCardV1TextInput)
    ], GoogleAppsCardV1Widget.prototype, "textInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textParagraph" }),
        __metadata("design:type", GoogleAppsCardV1TextParagraph)
    ], GoogleAppsCardV1Widget.prototype, "textParagraph", void 0);
    return GoogleAppsCardV1Widget;
}(SpeakeasyBase));
export { GoogleAppsCardV1Widget };
