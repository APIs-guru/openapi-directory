package shared

type NoteKindEnum string

const (
	NoteKindEnumKindUnspecified      NoteKindEnum = "KIND_UNSPECIFIED"
	NoteKindEnumPackageVulnerability NoteKindEnum = "PACKAGE_VULNERABILITY"
	NoteKindEnumBuildDetails         NoteKindEnum = "BUILD_DETAILS"
	NoteKindEnumImageBasis           NoteKindEnum = "IMAGE_BASIS"
	NoteKindEnumPackageManager       NoteKindEnum = "PACKAGE_MANAGER"
	NoteKindEnumDeployable           NoteKindEnum = "DEPLOYABLE"
	NoteKindEnumDiscovery            NoteKindEnum = "DISCOVERY"
	NoteKindEnumAttestationAuthority NoteKindEnum = "ATTESTATION_AUTHORITY"
	NoteKindEnumUpgrade              NoteKindEnum = "UPGRADE"
	NoteKindEnumCompliance           NoteKindEnum = "COMPLIANCE"
	NoteKindEnumSbom                 NoteKindEnum = "SBOM"
	NoteKindEnumSpdxPackage          NoteKindEnum = "SPDX_PACKAGE"
	NoteKindEnumSpdxFile             NoteKindEnum = "SPDX_FILE"
	NoteKindEnumSpdxRelationship     NoteKindEnum = "SPDX_RELATIONSHIP"
	NoteKindEnumDsseAttestation      NoteKindEnum = "DSSE_ATTESTATION"
)

type Note struct {
	AttestationAuthority *AttestationAuthority `json:"attestationAuthority,omitempty"`
	BaseImage            *Basis                `json:"baseImage,omitempty"`
	BuildType            *BuildType            `json:"buildType,omitempty"`
	Compliance           *ComplianceNote       `json:"compliance,omitempty"`
	CreateTime           *string               `json:"createTime,omitempty"`
	Deployable           *Deployable           `json:"deployable,omitempty"`
	Discovery            *Discovery            `json:"discovery,omitempty"`
	DsseAttestation      *DsseAttestationNote  `json:"dsseAttestation,omitempty"`
	ExpirationTime       *string               `json:"expirationTime,omitempty"`
	Kind                 *NoteKindEnum         `json:"kind,omitempty"`
	LongDescription      *string               `json:"longDescription,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Package              *Package              `json:"package,omitempty"`
	RelatedURL           []RelatedURL          `json:"relatedUrl,omitempty"`
	Sbom                 *DocumentNote         `json:"sbom,omitempty"`
	ShortDescription     *string               `json:"shortDescription,omitempty"`
	SpdxFile             *FileNote             `json:"spdxFile,omitempty"`
	SpdxPackage          *PackageInfoNote      `json:"spdxPackage,omitempty"`
	SpdxRelationship     *RelationshipNote     `json:"spdxRelationship,omitempty"`
	UpdateTime           *string               `json:"updateTime,omitempty"`
	Upgrade              *UpgradeNote          `json:"upgrade,omitempty"`
	VulnerabilityType    *VulnerabilityType    `json:"vulnerabilityType,omitempty"`
}
