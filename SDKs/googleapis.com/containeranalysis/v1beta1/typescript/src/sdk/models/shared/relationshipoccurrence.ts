import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RelationshipOccurrenceTypeEnum {
    RelationshipTypeUnspecified = "RELATIONSHIP_TYPE_UNSPECIFIED"
,    Describes = "DESCRIBES"
,    DescribedBy = "DESCRIBED_BY"
,    Contains = "CONTAINS"
,    ContainedBy = "CONTAINED_BY"
,    DependsOn = "DEPENDS_ON"
,    DependencyOf = "DEPENDENCY_OF"
,    DependencyManifestOf = "DEPENDENCY_MANIFEST_OF"
,    BuildDependencyOf = "BUILD_DEPENDENCY_OF"
,    DevDependencyOf = "DEV_DEPENDENCY_OF"
,    OptionalDependencyOf = "OPTIONAL_DEPENDENCY_OF"
,    ProvidedDependencyOf = "PROVIDED_DEPENDENCY_OF"
,    TestDependencyOf = "TEST_DEPENDENCY_OF"
,    RuntimeDependencyOf = "RUNTIME_DEPENDENCY_OF"
,    ExampleOf = "EXAMPLE_OF"
,    Generates = "GENERATES"
,    GeneratedFrom = "GENERATED_FROM"
,    AncestorOf = "ANCESTOR_OF"
,    DescendantOf = "DESCENDANT_OF"
,    VariantOf = "VARIANT_OF"
,    DistributionArtifact = "DISTRIBUTION_ARTIFACT"
,    PatchFor = "PATCH_FOR"
,    PatchApplied = "PATCH_APPLIED"
,    CopyOf = "COPY_OF"
,    FileAdded = "FILE_ADDED"
,    FileDeleted = "FILE_DELETED"
,    FileModified = "FILE_MODIFIED"
,    ExpandedFromArchive = "EXPANDED_FROM_ARCHIVE"
,    DynamicLink = "DYNAMIC_LINK"
,    StaticLink = "STATIC_LINK"
,    DataFileOf = "DATA_FILE_OF"
,    TestCaseOf = "TEST_CASE_OF"
,    BuildToolOf = "BUILD_TOOL_OF"
,    DevToolOf = "DEV_TOOL_OF"
,    TestOf = "TEST_OF"
,    TestToolOf = "TEST_TOOL_OF"
,    DocumentationOf = "DOCUMENTATION_OF"
,    OptionalComponentOf = "OPTIONAL_COMPONENT_OF"
,    MetafileOf = "METAFILE_OF"
,    PackageOf = "PACKAGE_OF"
,    Amends = "AMENDS"
,    PrerequisiteFor = "PREREQUISITE_FOR"
,    HasPrerequisite = "HAS_PREREQUISITE"
,    Other = "OTHER"
}


// RelationshipOccurrence
/** 
 * RelationshipOccurrence represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/
**/
export class RelationshipOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=type" })
  type?: RelationshipOccurrenceTypeEnum;
}
