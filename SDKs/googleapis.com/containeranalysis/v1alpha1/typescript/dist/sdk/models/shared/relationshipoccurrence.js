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
export var RelationshipOccurrenceTypeEnum;
(function (RelationshipOccurrenceTypeEnum) {
    RelationshipOccurrenceTypeEnum["RelationshipTypeUnspecified"] = "RELATIONSHIP_TYPE_UNSPECIFIED";
    RelationshipOccurrenceTypeEnum["Describes"] = "DESCRIBES";
    RelationshipOccurrenceTypeEnum["DescribedBy"] = "DESCRIBED_BY";
    RelationshipOccurrenceTypeEnum["Contains"] = "CONTAINS";
    RelationshipOccurrenceTypeEnum["ContainedBy"] = "CONTAINED_BY";
    RelationshipOccurrenceTypeEnum["DependsOn"] = "DEPENDS_ON";
    RelationshipOccurrenceTypeEnum["DependencyOf"] = "DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["DependencyManifestOf"] = "DEPENDENCY_MANIFEST_OF";
    RelationshipOccurrenceTypeEnum["BuildDependencyOf"] = "BUILD_DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["DevDependencyOf"] = "DEV_DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["OptionalDependencyOf"] = "OPTIONAL_DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["ProvidedDependencyOf"] = "PROVIDED_DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["TestDependencyOf"] = "TEST_DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["RuntimeDependencyOf"] = "RUNTIME_DEPENDENCY_OF";
    RelationshipOccurrenceTypeEnum["ExampleOf"] = "EXAMPLE_OF";
    RelationshipOccurrenceTypeEnum["Generates"] = "GENERATES";
    RelationshipOccurrenceTypeEnum["GeneratedFrom"] = "GENERATED_FROM";
    RelationshipOccurrenceTypeEnum["AncestorOf"] = "ANCESTOR_OF";
    RelationshipOccurrenceTypeEnum["DescendantOf"] = "DESCENDANT_OF";
    RelationshipOccurrenceTypeEnum["VariantOf"] = "VARIANT_OF";
    RelationshipOccurrenceTypeEnum["DistributionArtifact"] = "DISTRIBUTION_ARTIFACT";
    RelationshipOccurrenceTypeEnum["PatchFor"] = "PATCH_FOR";
    RelationshipOccurrenceTypeEnum["PatchApplied"] = "PATCH_APPLIED";
    RelationshipOccurrenceTypeEnum["CopyOf"] = "COPY_OF";
    RelationshipOccurrenceTypeEnum["FileAdded"] = "FILE_ADDED";
    RelationshipOccurrenceTypeEnum["FileDeleted"] = "FILE_DELETED";
    RelationshipOccurrenceTypeEnum["FileModified"] = "FILE_MODIFIED";
    RelationshipOccurrenceTypeEnum["ExpandedFromArchive"] = "EXPANDED_FROM_ARCHIVE";
    RelationshipOccurrenceTypeEnum["DynamicLink"] = "DYNAMIC_LINK";
    RelationshipOccurrenceTypeEnum["StaticLink"] = "STATIC_LINK";
    RelationshipOccurrenceTypeEnum["DataFileOf"] = "DATA_FILE_OF";
    RelationshipOccurrenceTypeEnum["TestCaseOf"] = "TEST_CASE_OF";
    RelationshipOccurrenceTypeEnum["BuildToolOf"] = "BUILD_TOOL_OF";
    RelationshipOccurrenceTypeEnum["DevToolOf"] = "DEV_TOOL_OF";
    RelationshipOccurrenceTypeEnum["TestOf"] = "TEST_OF";
    RelationshipOccurrenceTypeEnum["TestToolOf"] = "TEST_TOOL_OF";
    RelationshipOccurrenceTypeEnum["DocumentationOf"] = "DOCUMENTATION_OF";
    RelationshipOccurrenceTypeEnum["OptionalComponentOf"] = "OPTIONAL_COMPONENT_OF";
    RelationshipOccurrenceTypeEnum["MetafileOf"] = "METAFILE_OF";
    RelationshipOccurrenceTypeEnum["PackageOf"] = "PACKAGE_OF";
    RelationshipOccurrenceTypeEnum["Amends"] = "AMENDS";
    RelationshipOccurrenceTypeEnum["PrerequisiteFor"] = "PREREQUISITE_FOR";
    RelationshipOccurrenceTypeEnum["HasPrerequisite"] = "HAS_PREREQUISITE";
    RelationshipOccurrenceTypeEnum["Other"] = "OTHER";
})(RelationshipOccurrenceTypeEnum || (RelationshipOccurrenceTypeEnum = {}));
// RelationshipOccurrence
/**
 * RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/
**/
var RelationshipOccurrence = /** @class */ (function (_super) {
    __extends(RelationshipOccurrence, _super);
    function RelationshipOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], RelationshipOccurrence.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], RelationshipOccurrence.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], RelationshipOccurrence.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RelationshipOccurrence.prototype, "type", void 0);
    return RelationshipOccurrence;
}(SpeakeasyBase));
export { RelationshipOccurrence };
// RelationshipOccurrenceInput
/**
 * RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/
**/
var RelationshipOccurrenceInput = /** @class */ (function (_super) {
    __extends(RelationshipOccurrenceInput, _super);
    function RelationshipOccurrenceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], RelationshipOccurrenceInput.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], RelationshipOccurrenceInput.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], RelationshipOccurrenceInput.prototype, "target", void 0);
    return RelationshipOccurrenceInput;
}(SpeakeasyBase));
export { RelationshipOccurrenceInput };
