package shared

type UpgradeDistribution struct {
	Classification *string  `json:"classification"`
	CpeURI         *string  `json:"cpeUri"`
	Cve            []string `json:"cve"`
	Severity       *string  `json:"severity"`
}
