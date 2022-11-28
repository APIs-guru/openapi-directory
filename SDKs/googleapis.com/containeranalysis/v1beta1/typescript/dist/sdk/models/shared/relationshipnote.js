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
export var RelationshipNoteTypeEnum;
(function (RelationshipNoteTypeEnum) {
    RelationshipNoteTypeEnum["RelationshipTypeUnspecified"] = "RELATIONSHIP_TYPE_UNSPECIFIED";
    RelationshipNoteTypeEnum["Describes"] = "DESCRIBES";
    RelationshipNoteTypeEnum["DescribedBy"] = "DESCRIBED_BY";
    RelationshipNoteTypeEnum["Contains"] = "CONTAINS";
    RelationshipNoteTypeEnum["ContainedBy"] = "CONTAINED_BY";
    RelationshipNoteTypeEnum["DependsOn"] = "DEPENDS_ON";
    RelationshipNoteTypeEnum["DependencyOf"] = "DEPENDENCY_OF";
    RelationshipNoteTypeEnum["DependencyManifestOf"] = "DEPENDENCY_MANIFEST_OF";
    RelationshipNoteTypeEnum["BuildDependencyOf"] = "BUILD_DEPENDENCY_OF";
    RelationshipNoteTypeEnum["DevDependencyOf"] = "DEV_DEPENDENCY_OF";
    RelationshipNoteTypeEnum["OptionalDependencyOf"] = "OPTIONAL_DEPENDENCY_OF";
    RelationshipNoteTypeEnum["ProvidedDependencyOf"] = "PROVIDED_DEPENDENCY_OF";
    RelationshipNoteTypeEnum["TestDependencyOf"] = "TEST_DEPENDENCY_OF";
    RelationshipNoteTypeEnum["RuntimeDependencyOf"] = "RUNTIME_DEPENDENCY_OF";
    RelationshipNoteTypeEnum["ExampleOf"] = "EXAMPLE_OF";
    RelationshipNoteTypeEnum["Generates"] = "GENERATES";
    RelationshipNoteTypeEnum["GeneratedFrom"] = "GENERATED_FROM";
    RelationshipNoteTypeEnum["AncestorOf"] = "ANCESTOR_OF";
    RelationshipNoteTypeEnum["DescendantOf"] = "DESCENDANT_OF";
    RelationshipNoteTypeEnum["VariantOf"] = "VARIANT_OF";
    RelationshipNoteTypeEnum["DistributionArtifact"] = "DISTRIBUTION_ARTIFACT";
    RelationshipNoteTypeEnum["PatchFor"] = "PATCH_FOR";
    RelationshipNoteTypeEnum["PatchApplied"] = "PATCH_APPLIED";
    RelationshipNoteTypeEnum["CopyOf"] = "COPY_OF";
    RelationshipNoteTypeEnum["FileAdded"] = "FILE_ADDED";
    RelationshipNoteTypeEnum["FileDeleted"] = "FILE_DELETED";
    RelationshipNoteTypeEnum["FileModified"] = "FILE_MODIFIED";
    RelationshipNoteTypeEnum["ExpandedFromArchive"] = "EXPANDED_FROM_ARCHIVE";
    RelationshipNoteTypeEnum["DynamicLink"] = "DYNAMIC_LINK";
    RelationshipNoteTypeEnum["StaticLink"] = "STATIC_LINK";
    RelationshipNoteTypeEnum["DataFileOf"] = "DATA_FILE_OF";
    RelationshipNoteTypeEnum["TestCaseOf"] = "TEST_CASE_OF";
    RelationshipNoteTypeEnum["BuildToolOf"] = "BUILD_TOOL_OF";
    RelationshipNoteTypeEnum["DevToolOf"] = "DEV_TOOL_OF";
    RelationshipNoteTypeEnum["TestOf"] = "TEST_OF";
    RelationshipNoteTypeEnum["TestToolOf"] = "TEST_TOOL_OF";
    RelationshipNoteTypeEnum["DocumentationOf"] = "DOCUMENTATION_OF";
    RelationshipNoteTypeEnum["OptionalComponentOf"] = "OPTIONAL_COMPONENT_OF";
    RelationshipNoteTypeEnum["MetafileOf"] = "METAFILE_OF";
    RelationshipNoteTypeEnum["PackageOf"] = "PACKAGE_OF";
    RelationshipNoteTypeEnum["Amends"] = "AMENDS";
    RelationshipNoteTypeEnum["PrerequisiteFor"] = "PREREQUISITE_FOR";
    RelationshipNoteTypeEnum["HasPrerequisite"] = "HAS_PREREQUISITE";
    RelationshipNoteTypeEnum["Other"] = "OTHER";
})(RelationshipNoteTypeEnum || (RelationshipNoteTypeEnum = {}));
// RelationshipNote
/**
 * RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/
**/
var RelationshipNote = /** @class */ (function (_super) {
    __extends(RelationshipNote, _super);
    function RelationshipNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RelationshipNote.prototype, "type", void 0);
    return RelationshipNote;
}(SpeakeasyBase));
export { RelationshipNote };
