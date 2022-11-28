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
import { GoogleAppsDriveLabelsV2FieldAppliedCapabilities } from "./googleappsdrivelabelsv2fieldappliedcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldDateOptions } from "./googleappsdrivelabelsv2fielddateoptions";
import { GoogleAppsDriveLabelsV2FieldDisplayHints } from "./googleappsdrivelabelsv2fielddisplayhints";
import { GoogleAppsDriveLabelsV2FieldIntegerOptions } from "./googleappsdrivelabelsv2fieldintegeroptions";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2FieldProperties } from "./googleappsdrivelabelsv2fieldproperties";
import { GoogleAppsDriveLabelsV2FieldSchemaCapabilities } from "./googleappsdrivelabelsv2fieldschemacapabilities";
import { GoogleAppsDriveLabelsV2FieldSelectionOptions } from "./googleappsdrivelabelsv2fieldselectionoptions";
import { GoogleAppsDriveLabelsV2FieldTextOptions } from "./googleappsdrivelabelsv2fieldtextoptions";
import { GoogleAppsDriveLabelsV2FieldUserOptions } from "./googleappsdrivelabelsv2fielduseroptions";
// GoogleAppsDriveLabelsV2Field
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
var GoogleAppsDriveLabelsV2Field = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2Field, _super);
    function GoogleAppsDriveLabelsV2Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2Field.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldDateOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "dateOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "disableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldDisplayHints)
    ], GoogleAppsDriveLabelsV2Field.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldIntegerOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "integerOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2Lifecycle)
    ], GoogleAppsDriveLabelsV2Field.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2LockStatus)
    ], GoogleAppsDriveLabelsV2Field.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldProperties)
    ], GoogleAppsDriveLabelsV2Field.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryKey" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "queryKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2Field.prototype, "schemaCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldSelectionOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "selectionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldTextOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "textOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updater" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "updater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userOptions" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2FieldUserOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "userOptions", void 0);
    return GoogleAppsDriveLabelsV2Field;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2Field };
