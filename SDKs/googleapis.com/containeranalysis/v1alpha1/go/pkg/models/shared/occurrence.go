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

// OccurrenceInput
// `Occurrence` includes information about analysis occurrences for an image.
type OccurrenceInput struct {
	Attestation          *Attestation                 `json:"attestation,omitempty"`
	BuildDetails         *BuildDetails                `json:"buildDetails,omitempty"`
	Compliance           *ComplianceOccurrence        `json:"compliance,omitempty"`
	CreateTime           *string                      `json:"createTime,omitempty"`
	Deployment           *Deployment                  `json:"deployment,omitempty"`
	DerivedImage         *Derived                     `json:"derivedImage,omitempty"`
	Discovered           *Discovered                  `json:"discovered,omitempty"`
	DsseAttestation      *DsseAttestationOccurrence   `json:"dsseAttestation,omitempty"`
	Envelope             *Envelope                    `json:"envelope,omitempty"`
	Installation         *InstallationInput           `json:"installation,omitempty"`
	Kind                 *OccurrenceKindEnum          `json:"kind,omitempty"`
	Name                 *string                      `json:"name,omitempty"`
	NoteName             *string                      `json:"noteName,omitempty"`
	Remediation          *string                      `json:"remediation,omitempty"`
	Resource             *Resource                    `json:"resource,omitempty"`
	ResourceURL          *string                      `json:"resourceUrl,omitempty"`
	Sbom                 *DocumentOccurrence          `json:"sbom,omitempty"`
	SpdxFile             *FileOccurrence              `json:"spdxFile,omitempty"`
	SpdxPackage          *PackageInfoOccurrenceInput  `json:"spdxPackage,omitempty"`
	SpdxRelationship     *RelationshipOccurrenceInput `json:"spdxRelationship,omitempty"`
	UpdateTime           *string                      `json:"updateTime,omitempty"`
	Upgrade              *UpgradeOccurrence           `json:"upgrade,omitempty"`
	VulnerabilityDetails *VulnerabilityDetailsInput   `json:"vulnerabilityDetails,omitempty"`
}

// Occurrence
// `Occurrence` includes information about analysis occurrences for an image.
type Occurrence struct {
	Attestation          *Attestation               `json:"attestation,omitempty"`
	BuildDetails         *BuildDetails              `json:"buildDetails,omitempty"`
	Compliance           *ComplianceOccurrence      `json:"compliance,omitempty"`
	CreateTime           *string                    `json:"createTime,omitempty"`
	Deployment           *Deployment                `json:"deployment,omitempty"`
	DerivedImage         *Derived                   `json:"derivedImage,omitempty"`
	Discovered           *Discovered                `json:"discovered,omitempty"`
	DsseAttestation      *DsseAttestationOccurrence `json:"dsseAttestation,omitempty"`
	Envelope             *Envelope                  `json:"envelope,omitempty"`
	Installation         *Installation              `json:"installation,omitempty"`
	Kind                 *OccurrenceKindEnum        `json:"kind,omitempty"`
	Name                 *string                    `json:"name,omitempty"`
	NoteName             *string                    `json:"noteName,omitempty"`
	Remediation          *string                    `json:"remediation,omitempty"`
	Resource             *Resource                  `json:"resource,omitempty"`
	ResourceURL          *string                    `json:"resourceUrl,omitempty"`
	Sbom                 *DocumentOccurrence        `json:"sbom,omitempty"`
	SpdxFile             *FileOccurrence            `json:"spdxFile,omitempty"`
	SpdxPackage          *PackageInfoOccurrence     `json:"spdxPackage,omitempty"`
	SpdxRelationship     *RelationshipOccurrence    `json:"spdxRelationship,omitempty"`
	UpdateTime           *string                    `json:"updateTime,omitempty"`
	Upgrade              *UpgradeOccurrence         `json:"upgrade,omitempty"`
	VulnerabilityDetails *VulnerabilityDetails      `json:"vulnerabilityDetails,omitempty"`
}
