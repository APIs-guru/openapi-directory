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
import { GoogleAppsCardV1SelectionItem } from "./googleappscardv1selectionitem";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
export var GoogleAppsCardV1SelectionInputTypeEnum;
(function (GoogleAppsCardV1SelectionInputTypeEnum) {
    GoogleAppsCardV1SelectionInputTypeEnum["CheckBox"] = "CHECK_BOX";
    GoogleAppsCardV1SelectionInputTypeEnum["RadioButton"] = "RADIO_BUTTON";
    GoogleAppsCardV1SelectionInputTypeEnum["Switch"] = "SWITCH";
    GoogleAppsCardV1SelectionInputTypeEnum["Dropdown"] = "DROPDOWN";
})(GoogleAppsCardV1SelectionInputTypeEnum || (GoogleAppsCardV1SelectionInputTypeEnum = {}));
// GoogleAppsCardV1SelectionInput
/**
 * A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
**/
var GoogleAppsCardV1SelectionInput = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1SelectionInput, _super);
    function GoogleAppsCardV1SelectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleAppsCardV1SelectionItem }),
        __metadata("design:type", Array)
    ], GoogleAppsCardV1SelectionInput.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1SelectionInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1SelectionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onChangeAction" }),
        __metadata("design:type", GoogleAppsCardV1Action)
    ], GoogleAppsCardV1SelectionInput.prototype, "onChangeAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1SelectionInput.prototype, "type", void 0);
    return GoogleAppsCardV1SelectionInput;
}(SpeakeasyBase));
export { GoogleAppsCardV1SelectionInput };
