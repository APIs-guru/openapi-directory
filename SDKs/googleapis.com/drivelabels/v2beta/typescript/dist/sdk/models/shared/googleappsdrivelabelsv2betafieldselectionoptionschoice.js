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
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice
/**
 * Selection field choice.
**/
var GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice, _super);
    function GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "disableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycle)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLockStatus)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "schemaCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updater" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice.prototype, "updater", void 0);
    return GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice };
// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput
/**
 * Selection field choice.
**/
var GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput, _super);
    function GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycleInput)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "schemaCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updater" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput.prototype, "updater", void 0);
    return GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput };
