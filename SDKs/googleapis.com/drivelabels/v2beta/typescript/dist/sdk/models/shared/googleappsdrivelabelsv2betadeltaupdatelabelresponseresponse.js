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
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse";
// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse
/**
 * A single response from an update.
**/
var GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse, _super);
    function GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createField" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "createField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSelectionChoice" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "createSelectionChoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteField" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "deleteField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteSelectionChoice" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "deleteSelectionChoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableField" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "disableField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableSelectionChoice" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "disableSelectionChoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableField" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "enableField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSelectionChoice" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "enableSelectionChoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateField" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "updateField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateFieldType" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "updateFieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateLabel" }),
        __metadata("design:type", Map)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "updateLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSelectionChoiceProperties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse.prototype, "updateSelectionChoiceProperties", void 0);
    return GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse };
