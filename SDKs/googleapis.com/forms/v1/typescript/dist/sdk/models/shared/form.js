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
import { Info } from "./info";
import { Item } from "./item";
import { FormSettings } from "./formsettings";
import { InfoInput } from "./info";
import { ItemInput } from "./item";
// Form
/**
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formId" }),
        __metadata("design:type", String)
    ], Form.prototype, "formId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", Info)
    ], Form.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: Item }),
        __metadata("design:type", Array)
    ], Form.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedSheetId" }),
        __metadata("design:type", String)
    ], Form.prototype, "linkedSheetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responderUri" }),
        __metadata("design:type", String)
    ], Form.prototype, "responderUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], Form.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", FormSettings)
    ], Form.prototype, "settings", void 0);
    return Form;
}(SpeakeasyBase));
export { Form };
// FormInput
/**
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
var FormInput = /** @class */ (function (_super) {
    __extends(FormInput, _super);
    function FormInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", InfoInput)
    ], FormInput.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: ItemInput }),
        __metadata("design:type", Array)
    ], FormInput.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", FormSettings)
    ], FormInput.prototype, "settings", void 0);
    return FormInput;
}(SpeakeasyBase));
export { FormInput };
