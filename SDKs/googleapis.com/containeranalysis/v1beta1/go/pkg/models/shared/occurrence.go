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
OccurrenceKindEnumIntoto OccurrenceKindEnum = "INTOTO"
OccurrenceKindEnumSbom OccurrenceKindEnum = "SBOM"
OccurrenceKindEnumSpdxPackage OccurrenceKindEnum = "SPDX_PACKAGE"
OccurrenceKindEnumSpdxFile OccurrenceKindEnum = "SPDX_FILE"
OccurrenceKindEnumSpdxRelationship OccurrenceKindEnum = "SPDX_RELATIONSHIP"
)


type Occurrence struct {
    Attestation *Details `json:"attestation,omitempty"`
    Build *GrafeasV1beta1BuildDetails `json:"build,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Deployment *GrafeasV1beta1DeploymentDetails `json:"deployment,omitempty"`
    DerivedImage *GrafeasV1beta1ImageDetails `json:"derivedImage,omitempty"`
    Discovered *GrafeasV1beta1DiscoveryDetails `json:"discovered,omitempty"`
    Envelope *Envelope `json:"envelope,omitempty"`
    Installation *GrafeasV1beta1PackageDetails `json:"installation,omitempty"`
    Intoto *GrafeasV1beta1IntotoDetails `json:"intoto,omitempty"`
    Kind *OccurrenceKindEnum `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    NoteName *string `json:"noteName,omitempty"`
    Remediation *string `json:"remediation,omitempty"`
    Resource *Resource `json:"resource,omitempty"`
    Sbom *DocumentOccurrence `json:"sbom,omitempty"`
    SpdxFile *FileOccurrence `json:"spdxFile,omitempty"`
    SpdxPackage *PackageInfoOccurrence `json:"spdxPackage,omitempty"`
    SpdxRelationship *RelationshipOccurrence `json:"spdxRelationship,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Vulnerability *GrafeasV1beta1VulnerabilityDetails `json:"vulnerability,omitempty"`
    
}

