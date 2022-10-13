package shared

type NoteKindEnum string

const (
	NoteKindEnumNoteKindUnspecified NoteKindEnum = "NOTE_KIND_UNSPECIFIED"
	NoteKindEnumVulnerability       NoteKindEnum = "VULNERABILITY"
	NoteKindEnumBuild               NoteKindEnum = "BUILD"
	NoteKindEnumImage               NoteKindEnum = "IMAGE"
	NoteKindEnumPackage             NoteKindEnum = "PACKAGE"
	NoteKindEnumDeployment          NoteKindEnum = "DEPLOYMENT"
	NoteKindEnumDiscovery           NoteKindEnum = "DISCOVERY"
	NoteKindEnumAttestation         NoteKindEnum = "ATTESTATION"
	NoteKindEnumUpgrade             NoteKindEnum = "UPGRADE"
	NoteKindEnumCompliance          NoteKindEnum = "COMPLIANCE"
	NoteKindEnumDsseAttestation     NoteKindEnum = "DSSE_ATTESTATION"
)

type Note struct {
	Attestation      *AttestationNote     `json:"attestation"`
	Build            *BuildNote           `json:"build"`
	Compliance       *ComplianceNote      `json:"compliance"`
	CreateTime       *string              `json:"createTime"`
	Deployment       *DeploymentNote      `json:"deployment"`
	Discovery        *DiscoveryNote       `json:"discovery"`
	DsseAttestation  *DsseAttestationNote `json:"dsseAttestation"`
	ExpirationTime   *string              `json:"expirationTime"`
	Image            *ImageNote           `json:"image"`
	Kind             *NoteKindEnum        `json:"kind"`
	LongDescription  *string              `json:"longDescription"`
	Name             *string              `json:"name"`
	Package          *PackageNote         `json:"package"`
	RelatedNoteNames []string             `json:"relatedNoteNames"`
	RelatedURL       []RelatedURL         `json:"relatedUrl"`
	ShortDescription *string              `json:"shortDescription"`
	UpdateTime       *string              `json:"updateTime"`
	Upgrade          *UpgradeNote         `json:"upgrade"`
	Vulnerability    *VulnerabilityNote   `json:"vulnerability"`
}
