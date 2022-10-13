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
	AttestationAuthority *Authority        `json:"attestationAuthority"`
	BaseImage            *Basis            `json:"baseImage"`
	Build                *Build            `json:"build"`
	CreateTime           *string           `json:"createTime"`
	Deployable           *Deployable       `json:"deployable"`
	Discovery            *Discovery        `json:"discovery"`
	ExpirationTime       *string           `json:"expirationTime"`
	Intoto               *InToto           `json:"intoto"`
	Kind                 *NoteKindEnum     `json:"kind"`
	LongDescription      *string           `json:"longDescription"`
	Name                 *string           `json:"name"`
	Package              *Package          `json:"package"`
	RelatedNoteNames     []string          `json:"relatedNoteNames"`
	RelatedURL           []RelatedURL      `json:"relatedUrl"`
	Sbom                 *DocumentNote     `json:"sbom"`
	ShortDescription     *string           `json:"shortDescription"`
	SpdxFile             *FileNote         `json:"spdxFile"`
	SpdxPackage          *PackageInfoNote  `json:"spdxPackage"`
	SpdxRelationship     *RelationshipNote `json:"spdxRelationship"`
	UpdateTime           *string           `json:"updateTime"`
	Vulnerability        *Vulnerability    `json:"vulnerability"`
}
