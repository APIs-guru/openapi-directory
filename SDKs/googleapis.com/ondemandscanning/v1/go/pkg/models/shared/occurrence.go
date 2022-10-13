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
	OccurrenceKindEnumUpgrade             OccurrenceKindEnum = "UPGRADE"
	OccurrenceKindEnumCompliance          OccurrenceKindEnum = "COMPLIANCE"
	OccurrenceKindEnumDsseAttestation     OccurrenceKindEnum = "DSSE_ATTESTATION"
)

type Occurrence struct {
	Attestation     *AttestationOccurrence     `json:"attestation"`
	Build           *BuildOccurrence           `json:"build"`
	Compliance      *ComplianceOccurrence      `json:"compliance"`
	CreateTime      *string                    `json:"createTime"`
	Deployment      *DeploymentOccurrence      `json:"deployment"`
	Discovery       *DiscoveryOccurrence       `json:"discovery"`
	DsseAttestation *DsseAttestationOccurrence `json:"dsseAttestation"`
	Envelope        *Envelope                  `json:"envelope"`
	Image           *ImageOccurrence           `json:"image"`
	Kind            *OccurrenceKindEnum        `json:"kind"`
	Name            *string                    `json:"name"`
	NoteName        *string                    `json:"noteName"`
	Package         *PackageOccurrence         `json:"package"`
	Remediation     *string                    `json:"remediation"`
	ResourceURI     *string                    `json:"resourceUri"`
	UpdateTime      *string                    `json:"updateTime"`
	Upgrade         *UpgradeOccurrence         `json:"upgrade"`
	Vulnerability   *VulnerabilityOccurrence   `json:"vulnerability"`
}
