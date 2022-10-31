package shared




type OccurrenceKindEnum string

const (
    OccurrenceKindEnumNoteKindUnspecified OccurrenceKindEnum = "NOTE_KIND_UNSPECIFIED"
OccurrenceKindEnumVulnerability OccurrenceKindEnum = "VULNERABILITY"
OccurrenceKindEnumBuild OccurrenceKindEnum = "BUILD"
OccurrenceKindEnumImage OccurrenceKindEnum = "IMAGE"
OccurrenceKindEnumPackage OccurrenceKindEnum = "PACKAGE"
OccurrenceKindEnumDeployment OccurrenceKindEnum = "DEPLOYMENT"
OccurrenceKindEnumDiscovery OccurrenceKindEnum = "DISCOVERY"
OccurrenceKindEnumAttestation OccurrenceKindEnum = "ATTESTATION"
OccurrenceKindEnumUpgrade OccurrenceKindEnum = "UPGRADE"
OccurrenceKindEnumCompliance OccurrenceKindEnum = "COMPLIANCE"
OccurrenceKindEnumDsseAttestation OccurrenceKindEnum = "DSSE_ATTESTATION"
)


type Occurrence struct {
    Attestation *AttestationOccurrence `json:"attestation,omitempty"`
    Build *BuildOccurrence `json:"build,omitempty"`
    Compliance *ComplianceOccurrence `json:"compliance,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Deployment *DeploymentOccurrence `json:"deployment,omitempty"`
    Discovery *DiscoveryOccurrence `json:"discovery,omitempty"`
    DsseAttestation *DsseAttestationOccurrence `json:"dsseAttestation,omitempty"`
    Envelope *Envelope `json:"envelope,omitempty"`
    Image *ImageOccurrence `json:"image,omitempty"`
    Kind *OccurrenceKindEnum `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    NoteName *string `json:"noteName,omitempty"`
    Package *PackageOccurrence `json:"package,omitempty"`
    Remediation *string `json:"remediation,omitempty"`
    ResourceURI *string `json:"resourceUri,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Upgrade *UpgradeOccurrence `json:"upgrade,omitempty"`
    Vulnerability *VulnerabilityOccurrence `json:"vulnerability,omitempty"`
    
}

