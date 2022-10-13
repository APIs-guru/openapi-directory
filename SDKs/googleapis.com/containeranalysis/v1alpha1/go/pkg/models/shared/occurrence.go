package shared

type OccurrenceKindEnum string

const (
	OccurrenceKindEnumKindUnspecified      OccurrenceKindEnum = "KIND_UNSPECIFIED"
	OccurrenceKindEnumPackageVulnerability OccurrenceKindEnum = "PACKAGE_VULNERABILITY"
	OccurrenceKindEnumBuildDetails         OccurrenceKindEnum = "BUILD_DETAILS"
	OccurrenceKindEnumImageBasis           OccurrenceKindEnum = "IMAGE_BASIS"
	OccurrenceKindEnumPackageManager       OccurrenceKindEnum = "PACKAGE_MANAGER"
	OccurrenceKindEnumDeployable           OccurrenceKindEnum = "DEPLOYABLE"
	OccurrenceKindEnumDiscovery            OccurrenceKindEnum = "DISCOVERY"
	OccurrenceKindEnumAttestationAuthority OccurrenceKindEnum = "ATTESTATION_AUTHORITY"
	OccurrenceKindEnumUpgrade              OccurrenceKindEnum = "UPGRADE"
	OccurrenceKindEnumCompliance           OccurrenceKindEnum = "COMPLIANCE"
	OccurrenceKindEnumSbom                 OccurrenceKindEnum = "SBOM"
	OccurrenceKindEnumSpdxPackage          OccurrenceKindEnum = "SPDX_PACKAGE"
	OccurrenceKindEnumSpdxFile             OccurrenceKindEnum = "SPDX_FILE"
	OccurrenceKindEnumSpdxRelationship     OccurrenceKindEnum = "SPDX_RELATIONSHIP"
	OccurrenceKindEnumDsseAttestation      OccurrenceKindEnum = "DSSE_ATTESTATION"
)

type Occurrence struct {
	Attestation          *Attestation               `json:"attestation"`
	BuildDetails         *BuildDetails              `json:"buildDetails"`
	Compliance           *ComplianceOccurrence      `json:"compliance"`
	CreateTime           *string                    `json:"createTime"`
	Deployment           *Deployment                `json:"deployment"`
	DerivedImage         *Derived                   `json:"derivedImage"`
	Discovered           *Discovered                `json:"discovered"`
	DsseAttestation      *DsseAttestationOccurrence `json:"dsseAttestation"`
	Envelope             *Envelope                  `json:"envelope"`
	Installation         *Installation              `json:"installation"`
	Kind                 *OccurrenceKindEnum        `json:"kind"`
	Name                 *string                    `json:"name"`
	NoteName             *string                    `json:"noteName"`
	Remediation          *string                    `json:"remediation"`
	Resource             *Resource                  `json:"resource"`
	ResourceURL          *string                    `json:"resourceUrl"`
	Sbom                 *DocumentOccurrence        `json:"sbom"`
	SpdxFile             *FileOccurrence            `json:"spdxFile"`
	SpdxPackage          *PackageInfoOccurrence     `json:"spdxPackage"`
	SpdxRelationship     *RelationshipOccurrence    `json:"spdxRelationship"`
	UpdateTime           *string                    `json:"updateTime"`
	Upgrade              *UpgradeOccurrence         `json:"upgrade"`
	VulnerabilityDetails *VulnerabilityDetails      `json:"vulnerabilityDetails"`
}
