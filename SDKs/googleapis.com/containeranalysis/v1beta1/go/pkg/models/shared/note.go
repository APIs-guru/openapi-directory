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
	NoteKindEnumIntoto              NoteKindEnum = "INTOTO"
	NoteKindEnumSbom                NoteKindEnum = "SBOM"
	NoteKindEnumSpdxPackage         NoteKindEnum = "SPDX_PACKAGE"
	NoteKindEnumSpdxFile            NoteKindEnum = "SPDX_FILE"
	NoteKindEnumSpdxRelationship    NoteKindEnum = "SPDX_RELATIONSHIP"
)

type Note struct {
	AttestationAuthority *Authority        `json:"attestationAuthority,omitempty"`
	BaseImage            *Basis            `json:"baseImage,omitempty"`
	Build                *Build            `json:"build,omitempty"`
	CreateTime           *string           `json:"createTime,omitempty"`
	Deployable           *Deployable       `json:"deployable,omitempty"`
	Discovery            *Discovery        `json:"discovery,omitempty"`
	ExpirationTime       *string           `json:"expirationTime,omitempty"`
	Intoto               *InToto           `json:"intoto,omitempty"`
	Kind                 *NoteKindEnum     `json:"kind,omitempty"`
	LongDescription      *string           `json:"longDescription,omitempty"`
	Name                 *string           `json:"name,omitempty"`
	Package              *Package          `json:"package,omitempty"`
	RelatedNoteNames     []string          `json:"relatedNoteNames,omitempty"`
	RelatedURL           []RelatedURL      `json:"relatedUrl,omitempty"`
	Sbom                 *DocumentNote     `json:"sbom,omitempty"`
	ShortDescription     *string           `json:"shortDescription,omitempty"`
	SpdxFile             *FileNote         `json:"spdxFile,omitempty"`
	SpdxPackage          *PackageInfoNote  `json:"spdxPackage,omitempty"`
	SpdxRelationship     *RelationshipNote `json:"spdxRelationship,omitempty"`
	UpdateTime           *string           `json:"updateTime,omitempty"`
	Vulnerability        *Vulnerability    `json:"vulnerability,omitempty"`
}
