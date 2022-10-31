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
	Attestation      *AttestationNote     `json:"attestation,omitempty"`
	Build            *BuildNote           `json:"build,omitempty"`
	Compliance       *ComplianceNote      `json:"compliance,omitempty"`
	CreateTime       *string              `json:"createTime,omitempty"`
	Deployment       *DeploymentNote      `json:"deployment,omitempty"`
	Discovery        *DiscoveryNote       `json:"discovery,omitempty"`
	DsseAttestation  *DsseAttestationNote `json:"dsseAttestation,omitempty"`
	ExpirationTime   *string              `json:"expirationTime,omitempty"`
	Image            *ImageNote           `json:"image,omitempty"`
	Kind             *NoteKindEnum        `json:"kind,omitempty"`
	LongDescription  *string              `json:"longDescription,omitempty"`
	Name             *string              `json:"name,omitempty"`
	Package          *PackageNote         `json:"package,omitempty"`
	RelatedNoteNames []string             `json:"relatedNoteNames,omitempty"`
	RelatedURL       []RelatedURL         `json:"relatedUrl,omitempty"`
	ShortDescription *string              `json:"shortDescription,omitempty"`
	UpdateTime       *string              `json:"updateTime,omitempty"`
	Upgrade          *UpgradeNote         `json:"upgrade,omitempty"`
	Vulnerability    *VulnerabilityNote   `json:"vulnerability,omitempty"`
}
