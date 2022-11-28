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
import { GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities } from "./googleappsdrivelabelsv2betalabelappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2betalabelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaLabelDisplayHints } from "./googleappsdrivelabelsv2betalabeldisplayhints";
import { GoogleAppsDriveLabelsV2betaFieldInput } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";
import { GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities } from "./googleappsdrivelabelsv2betalabelschemacapabilities";
import { GoogleAppsDriveLabelsV2betaField } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
export var GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
(function (GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum) {
    GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum["LabelTypeUnspecified"] = "LABEL_TYPE_UNSPECIFIED";
    GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum["Shared"] = "SHARED";
    GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum["Admin"] = "ADMIN";
})(GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum || (GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = {}));
// GoogleAppsDriveLabelsV2betaLabelInput
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
var GoogleAppsDriveLabelsV2betaLabelInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaLabelInput, _super);
    function GoogleAppsDriveLabelsV2betaLabelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLabelPolicy" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "appliedLabelPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelDisplayHints)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleAppsDriveLabelsV2betaFieldInput }),
        __metadata("design:type", Array)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelType" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "labelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnMoreUri" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "learnMoreUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycleInput)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelProperties)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "revisionCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaLabelInput.prototype, "schemaCapabilities", void 0);
    return GoogleAppsDriveLabelsV2betaLabelInput;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaLabelInput };
// GoogleAppsDriveLabelsV2betaLabel
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
var GoogleAppsDriveLabelsV2betaLabel = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaLabel, _super);
    function GoogleAppsDriveLabelsV2betaLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "appliedCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedLabelPolicy" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "appliedLabelPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "disableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabler" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "disabler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayHints" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelDisplayHints)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "displayHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleAppsDriveLabelsV2betaField }),
        __metadata("design:type", Array)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelType" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "labelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnMoreUri" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "learnMoreUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycle)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLockStatus)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelProperties)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreator" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "revisionCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaLabel.prototype, "schemaCapabilities", void 0);
    return GoogleAppsDriveLabelsV2betaLabel;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaLabel };
