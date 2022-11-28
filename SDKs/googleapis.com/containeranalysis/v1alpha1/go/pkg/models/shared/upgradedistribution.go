package shared

// UpgradeDistribution
// The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
type UpgradeDistribution struct {
	Classification *string  `json:"classification,omitempty"`
	CpeURI         *string  `json:"cpeUri,omitempty"`
	Cve            []string `json:"cve,omitempty"`
	Severity       *string  `json:"severity,omitempty"`
}
