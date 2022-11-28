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
import { GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldDateOptions } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaFieldDisplayHints } from "./googleappsdrivelabelsv2betafielddisplayhints";
import { GoogleAppsDriveLabelsV2betaFieldIntegerOptions } from "./googleappsdrivelabelsv2betafieldintegeroptions";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldProperties } from "./googleappsdrivelabelsv2betafieldproperties";
import { GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldschemacapabilities";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptions } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldTextOptions } from "./googleappsdrivelabelsv2betafieldtextoptions";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";
import { GoogleAppsDriveLabelsV2betaFieldDateOptionsInput } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput } from "./googleappsdrivelabelsv2betafieldselectionoptions";
// GoogleAppsDriveLabelsV2betaField
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
var GoogleAppsDriveLabelsV2betaField = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaField, _super);
    function GoogleAppsDriveLabelsV2betaField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldDateOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "dateOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "disableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldDisplayHints)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldIntegerOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "integerOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycle)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLockStatus)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldProperties)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryKey" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "queryKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "schemaCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "selectionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldTextOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "textOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updater" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "updater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldUserOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "userOptions", void 0);
    return GoogleAppsDriveLabelsV2betaField;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaField };
// GoogleAppsDriveLabelsV2betaFieldInput
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
var GoogleAppsDriveLabelsV2betaFieldInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldInput, _super);
    function GoogleAppsDriveLabelsV2betaFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldDateOptionsInput)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "dateOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldDisplayHints)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycleInput)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldProperties)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "schemaCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "selectionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updater" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "updater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaFieldUserOptions)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "userOptions", void 0);
    return GoogleAppsDriveLabelsV2betaFieldInput;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaFieldInput };
