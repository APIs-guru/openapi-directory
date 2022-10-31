package shared




type DiscoveryAnalysisKindEnum string

const (
    DiscoveryAnalysisKindEnumKindUnspecified DiscoveryAnalysisKindEnum = "KIND_UNSPECIFIED"
DiscoveryAnalysisKindEnumPackageVulnerability DiscoveryAnalysisKindEnum = "PACKAGE_VULNERABILITY"
DiscoveryAnalysisKindEnumBuildDetails DiscoveryAnalysisKindEnum = "BUILD_DETAILS"
DiscoveryAnalysisKindEnumImageBasis DiscoveryAnalysisKindEnum = "IMAGE_BASIS"
DiscoveryAnalysisKindEnumPackageManager DiscoveryAnalysisKindEnum = "PACKAGE_MANAGER"
DiscoveryAnalysisKindEnumDeployable DiscoveryAnalysisKindEnum = "DEPLOYABLE"
DiscoveryAnalysisKindEnumDiscovery DiscoveryAnalysisKindEnum = "DISCOVERY"
DiscoveryAnalysisKindEnumAttestationAuthority DiscoveryAnalysisKindEnum = "ATTESTATION_AUTHORITY"
DiscoveryAnalysisKindEnumUpgrade DiscoveryAnalysisKindEnum = "UPGRADE"
DiscoveryAnalysisKindEnumCompliance DiscoveryAnalysisKindEnum = "COMPLIANCE"
DiscoveryAnalysisKindEnumSbom DiscoveryAnalysisKindEnum = "SBOM"
DiscoveryAnalysisKindEnumSpdxPackage DiscoveryAnalysisKindEnum = "SPDX_PACKAGE"
DiscoveryAnalysisKindEnumSpdxFile DiscoveryAnalysisKindEnum = "SPDX_FILE"
DiscoveryAnalysisKindEnumSpdxRelationship DiscoveryAnalysisKindEnum = "SPDX_RELATIONSHIP"
DiscoveryAnalysisKindEnumDsseAttestation DiscoveryAnalysisKindEnum = "DSSE_ATTESTATION"
)


type Discovery struct {
    AnalysisKind *DiscoveryAnalysisKindEnum `json:"analysisKind,omitempty"`
    
}

