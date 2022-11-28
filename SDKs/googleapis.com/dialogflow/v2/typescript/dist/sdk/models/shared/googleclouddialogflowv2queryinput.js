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
import { GoogleCloudDialogflowV2InputAudioConfig } from "./googleclouddialogflowv2inputaudioconfig";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
// GoogleCloudDialogflowV2QueryInput
/**
 * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
**/
var GoogleCloudDialogflowV2QueryInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2QueryInput, _super);
    function GoogleCloudDialogflowV2QueryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2InputAudioConfig)
    ], GoogleCloudDialogflowV2QueryInput.prototype, "audioConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", GoogleCloudDialogflowV2EventInput)
    ], GoogleCloudDialogflowV2QueryInput.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowV2TextInput)
    ], GoogleCloudDialogflowV2QueryInput.prototype, "text", void 0);
    return GoogleCloudDialogflowV2QueryInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2QueryInput };
