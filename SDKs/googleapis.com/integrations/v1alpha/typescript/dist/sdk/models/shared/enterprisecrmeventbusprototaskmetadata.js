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
import { EnterpriseCrmEventbusProtoTaskMetadataAdmin } from "./enterprisecrmeventbusprototaskmetadataadmin";
export var EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;
(function (EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum) {
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["UnspecifiedCategory"] = "UNSPECIFIED_CATEGORY";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["Custom"] = "CUSTOM";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["FlowControl"] = "FLOW_CONTROL";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["DataManipulation"] = "DATA_MANIPULATION";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["Scripting"] = "SCRIPTING";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["Connector"] = "CONNECTOR";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["Hidden"] = "HIDDEN";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["CloudSystems"] = "CLOUD_SYSTEMS";
    EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum["CustomTaskTemplate"] = "CUSTOM_TASK_TEMPLATE";
})(EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum || (EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum = {}));
export var EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;
(function (EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum) {
    EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum["UnspecifiedJsonValidationOption"] = "UNSPECIFIED_JSON_VALIDATION_OPTION";
    EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum["Skip"] = "SKIP";
    EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum["PreExecution"] = "PRE_EXECUTION";
    EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum["PostExecution"] = "POST_EXECUTION";
    EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum["PrePostExecution"] = "PRE_POST_EXECUTION";
})(EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum || (EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum = {}));
export var EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;
(function (EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum) {
    EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum["UnspecifiedExternalCategory"] = "UNSPECIFIED_EXTERNAL_CATEGORY";
    EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum["Core"] = "CORE";
    EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum["Connectors"] = "CONNECTORS";
})(EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum || (EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum = {}));
export var EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;
(function (EnterpriseCrmEventbusProtoTaskMetadataStatusEnum) {
    EnterpriseCrmEventbusProtoTaskMetadataStatusEnum["UnspecifiedStatus"] = "UNSPECIFIED_STATUS";
    EnterpriseCrmEventbusProtoTaskMetadataStatusEnum["DefaultInactive"] = "DEFAULT_INACTIVE";
    EnterpriseCrmEventbusProtoTaskMetadataStatusEnum["Active"] = "ACTIVE";
})(EnterpriseCrmEventbusProtoTaskMetadataStatusEnum || (EnterpriseCrmEventbusProtoTaskMetadataStatusEnum = {}));
export var EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;
(function (EnterpriseCrmEventbusProtoTaskMetadataSystemEnum) {
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["UnspecifiedSystem"] = "UNSPECIFIED_SYSTEM";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Generic"] = "GENERIC";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Buganizer"] = "BUGANIZER";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Salesforce"] = "SALESFORCE";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["CloudSql"] = "CLOUD_SQL";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Plx"] = "PLX";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Sheets"] = "SHEETS";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["GoogleGroups"] = "GOOGLE_GROUPS";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Email"] = "EMAIL";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["Spanner"] = "SPANNER";
    EnterpriseCrmEventbusProtoTaskMetadataSystemEnum["DataBridge"] = "DATA_BRIDGE";
})(EnterpriseCrmEventbusProtoTaskMetadataSystemEnum || (EnterpriseCrmEventbusProtoTaskMetadataSystemEnum = {}));
// EnterpriseCrmEventbusProtoTaskMetadata
/**
 * TaskMetadata are attributes that are associated to every common Task we have. Next available: 26
**/
var EnterpriseCrmEventbusProtoTaskMetadata = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoTaskMetadata, _super);
    function EnterpriseCrmEventbusProtoTaskMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeTaskName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "activeTaskName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admins", elemType: EnterpriseCrmEventbusProtoTaskMetadataAdmin }),
        __metadata("design:type", Array)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "admins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeSearchLink" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "codeSearchLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultJsonValidationOption" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "defaultJsonValidationOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSpec" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "defaultSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptiveName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "descriptiveName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=docMarkdown" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "docMarkdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalCategory" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "externalCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalCategorySequence" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "externalCategorySequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDocHtml" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "externalDocHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDocLink" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "externalDocLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDocMarkdown" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "externalDocMarkdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=g3DocLink" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "g3DocLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconLink" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "iconLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDeprecated" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "isDeprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standaloneExternalDocHtml" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "standaloneExternalDocHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "system", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], EnterpriseCrmEventbusProtoTaskMetadata.prototype, "tags", void 0);
    return EnterpriseCrmEventbusProtoTaskMetadata;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoTaskMetadata };
