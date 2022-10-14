package shared

type RelationshipOccurrenceTypeEnum string

const (
	RelationshipOccurrenceTypeEnumRelationshipTypeUnspecified RelationshipOccurrenceTypeEnum = "RELATIONSHIP_TYPE_UNSPECIFIED"
	RelationshipOccurrenceTypeEnumDescribes                   RelationshipOccurrenceTypeEnum = "DESCRIBES"
	RelationshipOccurrenceTypeEnumDescribedBy                 RelationshipOccurrenceTypeEnum = "DESCRIBED_BY"
	RelationshipOccurrenceTypeEnumContains                    RelationshipOccurrenceTypeEnum = "CONTAINS"
	RelationshipOccurrenceTypeEnumContainedBy                 RelationshipOccurrenceTypeEnum = "CONTAINED_BY"
	RelationshipOccurrenceTypeEnumDependsOn                   RelationshipOccurrenceTypeEnum = "DEPENDS_ON"
	RelationshipOccurrenceTypeEnumDependencyOf                RelationshipOccurrenceTypeEnum = "DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumDependencyManifestOf        RelationshipOccurrenceTypeEnum = "DEPENDENCY_MANIFEST_OF"
	RelationshipOccurrenceTypeEnumBuildDependencyOf           RelationshipOccurrenceTypeEnum = "BUILD_DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumDevDependencyOf             RelationshipOccurrenceTypeEnum = "DEV_DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumOptionalDependencyOf        RelationshipOccurrenceTypeEnum = "OPTIONAL_DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumProvidedDependencyOf        RelationshipOccurrenceTypeEnum = "PROVIDED_DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumTestDependencyOf            RelationshipOccurrenceTypeEnum = "TEST_DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumRuntimeDependencyOf         RelationshipOccurrenceTypeEnum = "RUNTIME_DEPENDENCY_OF"
	RelationshipOccurrenceTypeEnumExampleOf                   RelationshipOccurrenceTypeEnum = "EXAMPLE_OF"
	RelationshipOccurrenceTypeEnumGenerates                   RelationshipOccurrenceTypeEnum = "GENERATES"
	RelationshipOccurrenceTypeEnumGeneratedFrom               RelationshipOccurrenceTypeEnum = "GENERATED_FROM"
	RelationshipOccurrenceTypeEnumAncestorOf                  RelationshipOccurrenceTypeEnum = "ANCESTOR_OF"
	RelationshipOccurrenceTypeEnumDescendantOf                RelationshipOccurrenceTypeEnum = "DESCENDANT_OF"
	RelationshipOccurrenceTypeEnumVariantOf                   RelationshipOccurrenceTypeEnum = "VARIANT_OF"
	RelationshipOccurrenceTypeEnumDistributionArtifact        RelationshipOccurrenceTypeEnum = "DISTRIBUTION_ARTIFACT"
	RelationshipOccurrenceTypeEnumPatchFor                    RelationshipOccurrenceTypeEnum = "PATCH_FOR"
	RelationshipOccurrenceTypeEnumPatchApplied                RelationshipOccurrenceTypeEnum = "PATCH_APPLIED"
	RelationshipOccurrenceTypeEnumCopyOf                      RelationshipOccurrenceTypeEnum = "COPY_OF"
	RelationshipOccurrenceTypeEnumFileAdded                   RelationshipOccurrenceTypeEnum = "FILE_ADDED"
	RelationshipOccurrenceTypeEnumFileDeleted                 RelationshipOccurrenceTypeEnum = "FILE_DELETED"
	RelationshipOccurrenceTypeEnumFileModified                RelationshipOccurrenceTypeEnum = "FILE_MODIFIED"
	RelationshipOccurrenceTypeEnumExpandedFromArchive         RelationshipOccurrenceTypeEnum = "EXPANDED_FROM_ARCHIVE"
	RelationshipOccurrenceTypeEnumDynamicLink                 RelationshipOccurrenceTypeEnum = "DYNAMIC_LINK"
	RelationshipOccurrenceTypeEnumStaticLink                  RelationshipOccurrenceTypeEnum = "STATIC_LINK"
	RelationshipOccurrenceTypeEnumDataFileOf                  RelationshipOccurrenceTypeEnum = "DATA_FILE_OF"
	RelationshipOccurrenceTypeEnumTestCaseOf                  RelationshipOccurrenceTypeEnum = "TEST_CASE_OF"
	RelationshipOccurrenceTypeEnumBuildToolOf                 RelationshipOccurrenceTypeEnum = "BUILD_TOOL_OF"
	RelationshipOccurrenceTypeEnumDevToolOf                   RelationshipOccurrenceTypeEnum = "DEV_TOOL_OF"
	RelationshipOccurrenceTypeEnumTestOf                      RelationshipOccurrenceTypeEnum = "TEST_OF"
	RelationshipOccurrenceTypeEnumTestToolOf                  RelationshipOccurrenceTypeEnum = "TEST_TOOL_OF"
	RelationshipOccurrenceTypeEnumDocumentationOf             RelationshipOccurrenceTypeEnum = "DOCUMENTATION_OF"
	RelationshipOccurrenceTypeEnumOptionalComponentOf         RelationshipOccurrenceTypeEnum = "OPTIONAL_COMPONENT_OF"
	RelationshipOccurrenceTypeEnumMetafileOf                  RelationshipOccurrenceTypeEnum = "METAFILE_OF"
	RelationshipOccurrenceTypeEnumPackageOf                   RelationshipOccurrenceTypeEnum = "PACKAGE_OF"
	RelationshipOccurrenceTypeEnumAmends                      RelationshipOccurrenceTypeEnum = "AMENDS"
	RelationshipOccurrenceTypeEnumPrerequisiteFor             RelationshipOccurrenceTypeEnum = "PREREQUISITE_FOR"
	RelationshipOccurrenceTypeEnumHasPrerequisite             RelationshipOccurrenceTypeEnum = "HAS_PREREQUISITE"
	RelationshipOccurrenceTypeEnumOther                       RelationshipOccurrenceTypeEnum = "OTHER"
)

type RelationshipOccurrence struct {
	Comment *string                         `json:"comment,omitempty"`
	Source  *string                         `json:"source,omitempty"`
	Target  *string                         `json:"target,omitempty"`
	Type    *RelationshipOccurrenceTypeEnum `json:"type,omitempty"`
}
