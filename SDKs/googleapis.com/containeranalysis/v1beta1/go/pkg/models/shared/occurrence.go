package shared

type OccurrenceKindEnum string

const (
	OccurrenceKindEnumNoteKindUnspecified OccurrenceKindEnum = "NOTE_KIND_UNSPECIFIED"
	OccurrenceKindEnumVulnerability       OccurrenceKindEnum = "VULNERABILITY"
	OccurrenceKindEnumBuild               OccurrenceKindEnum = "BUILD"
	OccurrenceKindEnumImage               OccurrenceKindEnum = "IMAGE"
	OccurrenceKindEnumPackage             OccurrenceKindEnum = "PACKAGE"
	OccurrenceKindEnumDeployment          OccurrenceKindEnum = "DEPLOYMENT"
	OccurrenceKindEnumDiscovery           OccurrenceKindEnum = "DISCOVERY"
	OccurrenceKindEnumAttestation         OccurrenceKindEnum = "ATTESTATION"
	OccurrenceKindEnumIntoto              OccurrenceKindEnum = "INTOTO"
	OccurrenceKindEnumSbom                OccurrenceKindEnum = "SBOM"
	OccurrenceKindEnumSpdxPackage         OccurrenceKindEnum = "SPDX_PACKAGE"
	OccurrenceKindEnumSpdxFile            OccurrenceKindEnum = "SPDX_FILE"
	OccurrenceKindEnumSpdxRelationship    OccurrenceKindEnum = "SPDX_RELATIONSHIP"
)

type Occurrence struct {
	Attestation      *Details                            `json:"attestation"`
	Build            *GrafeasV1beta1BuildDetails         `json:"build"`
	CreateTime       *string                             `json:"createTime"`
	Deployment       *GrafeasV1beta1DeploymentDetails    `json:"deployment"`
	DerivedImage     *GrafeasV1beta1ImageDetails         `json:"derivedImage"`
	Discovered       *GrafeasV1beta1DiscoveryDetails     `json:"discovered"`
	Envelope         *Envelope                           `json:"envelope"`
	Installation     *GrafeasV1beta1PackageDetails       `json:"installation"`
	Intoto           *GrafeasV1beta1IntotoDetails        `json:"intoto"`
	Kind             *OccurrenceKindEnum                 `json:"kind"`
	Name             *string                             `json:"name"`
	NoteName         *string                             `json:"noteName"`
	Remediation      *string                             `json:"remediation"`
	Resource         *Resource                           `json:"resource"`
	Sbom             *DocumentOccurrence                 `json:"sbom"`
	SpdxFile         *FileOccurrence                     `json:"spdxFile"`
	SpdxPackage      *PackageInfoOccurrence              `json:"spdxPackage"`
	SpdxRelationship *RelationshipOccurrence             `json:"spdxRelationship"`
	UpdateTime       *string                             `json:"updateTime"`
	Vulnerability    *GrafeasV1beta1VulnerabilityDetails `json:"vulnerability"`
}
