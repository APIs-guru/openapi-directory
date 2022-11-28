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
import { GoogleChromePolicyVersionsV1AdditionalTargetKeyName } from "./googlechromepolicyversionsv1additionaltargetkeyname";
import { Proto2FileDescriptorProto } from "./proto2filedescriptorproto";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription } from "./googlechromepolicyversionsv1policyschemafielddescription";
import { GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription } from "./googlechromepolicyversionsv1policyschemanoticedescription";
import { ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle } from "./chromecrosdpanelautosettingsprotopolicyapilifecycle";
export var GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum;
(function (GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum) {
    GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum["TargetResourceUnspecified"] = "TARGET_RESOURCE_UNSPECIFIED";
    GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum["OrgUnit"] = "ORG_UNIT";
    GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum["Group"] = "GROUP";
})(GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum || (GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum = {}));
// GoogleChromePolicyVersionsV1PolicySchema
/**
 * Resource representing a policy schema.
**/
var GoogleChromePolicyVersionsV1PolicySchema = /** @class */ (function (_super) {
    __extends(GoogleChromePolicyVersionsV1PolicySchema, _super);
    function GoogleChromePolicyVersionsV1PolicySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessRestrictions" }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "accessRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalTargetKeyNames", elemType: GoogleChromePolicyVersionsV1AdditionalTargetKeyName }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "additionalTargetKeyNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTitle" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "categoryTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", Proto2FileDescriptorProto)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldDescriptions", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "fieldDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notices", elemType: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "notices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyApiLifecycle" }),
        __metadata("design:type", ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "policyApiLifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyApiLifeycle" }),
        __metadata("design:type", ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "policyApiLifeycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyDescription" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "policyDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaName" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "schemaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportUri" }),
        __metadata("design:type", String)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "supportUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validTargetResources" }),
        __metadata("design:type", Array)
    ], GoogleChromePolicyVersionsV1PolicySchema.prototype, "validTargetResources", void 0);
    return GoogleChromePolicyVersionsV1PolicySchema;
}(SpeakeasyBase));
export { GoogleChromePolicyVersionsV1PolicySchema };
