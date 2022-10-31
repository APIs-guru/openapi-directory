package shared



type PackageInfoNote struct {
    Analyzed *bool `json:"analyzed,omitempty"`
    Attribution *string `json:"attribution,omitempty"`
    Checksum *string `json:"checksum,omitempty"`
    Copyright *string `json:"copyright,omitempty"`
    DetailedDescription *string `json:"detailedDescription,omitempty"`
    DownloadLocation *string `json:"downloadLocation,omitempty"`
    ExternalRefs []ExternalRef `json:"externalRefs,omitempty"`
    FilesLicenseInfo []string `json:"filesLicenseInfo,omitempty"`
    HomePage *string `json:"homePage,omitempty"`
    LicenseDeclared *License `json:"licenseDeclared,omitempty"`
    Originator *string `json:"originator,omitempty"`
    PackageType *string `json:"packageType,omitempty"`
    SummaryDescription *string `json:"summaryDescription,omitempty"`
    Supplier *string `json:"supplier,omitempty"`
    Title *string `json:"title,omitempty"`
    VerificationCode *string `json:"verificationCode,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

