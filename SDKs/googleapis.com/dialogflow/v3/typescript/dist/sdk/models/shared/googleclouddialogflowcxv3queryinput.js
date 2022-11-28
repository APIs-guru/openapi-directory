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
import { GoogleCloudDialogflowCxV3AudioInput } from "./googleclouddialogflowcxv3audioinput";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3EventInput } from "./googleclouddialogflowcxv3eventinput";
import { GoogleCloudDialogflowCxV3IntentInput } from "./googleclouddialogflowcxv3intentinput";
import { GoogleCloudDialogflowCxV3TextInput } from "./googleclouddialogflowcxv3textinput";
// GoogleCloudDialogflowCxV3QueryInput
/**
 * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
**/
var GoogleCloudDialogflowCxV3QueryInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3QueryInput, _super);
    function GoogleCloudDialogflowCxV3QueryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3AudioInput)
    ], GoogleCloudDialogflowCxV3QueryInput.prototype, "audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dtmf" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3DtmfInput)
    ], GoogleCloudDialogflowCxV3QueryInput.prototype, "dtmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3EventInput)
    ], GoogleCloudDialogflowCxV3QueryInput.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3IntentInput)
    ], GoogleCloudDialogflowCxV3QueryInput.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3QueryInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3TextInput)
    ], GoogleCloudDialogflowCxV3QueryInput.prototype, "text", void 0);
    return GoogleCloudDialogflowCxV3QueryInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3QueryInput };
