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
	AttestationAuthority *AttestationAuthority `json:"attestationAuthority"`
	BaseImage            *Basis                `json:"baseImage"`
	BuildType            *BuildType            `json:"buildType"`
	Compliance           *ComplianceNote       `json:"compliance"`
	CreateTime           *string               `json:"createTime"`
	Deployable           *Deployable           `json:"deployable"`
	Discovery            *Discovery            `json:"discovery"`
	DsseAttestation      *DsseAttestationNote  `json:"dsseAttestation"`
	ExpirationTime       *string               `json:"expirationTime"`
	Kind                 *NoteKindEnum         `json:"kind"`
	LongDescription      *string               `json:"longDescription"`
	Name                 *string               `json:"name"`
	Package              *Package              `json:"package"`
	RelatedURL           []RelatedURL          `json:"relatedUrl"`
	Sbom                 *DocumentNote         `json:"sbom"`
	ShortDescription     *string               `json:"shortDescription"`
	SpdxFile             *FileNote             `json:"spdxFile"`
	SpdxPackage          *PackageInfoNote      `json:"spdxPackage"`
	SpdxRelationship     *RelationshipNote     `json:"spdxRelationship"`
	UpdateTime           *string               `json:"updateTime"`
	Upgrade              *UpgradeNote          `json:"upgrade"`
	VulnerabilityType    *VulnerabilityType    `json:"vulnerabilityType"`
}
