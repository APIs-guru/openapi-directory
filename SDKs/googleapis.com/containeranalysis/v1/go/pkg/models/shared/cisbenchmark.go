package shared

type CisBenchmarkSeverityEnum string

const (
	CisBenchmarkSeverityEnumSeverityUnspecified CisBenchmarkSeverityEnum = "SEVERITY_UNSPECIFIED"
	CisBenchmarkSeverityEnumMinimal             CisBenchmarkSeverityEnum = "MINIMAL"
	CisBenchmarkSeverityEnumLow                 CisBenchmarkSeverityEnum = "LOW"
	CisBenchmarkSeverityEnumMedium              CisBenchmarkSeverityEnum = "MEDIUM"
	CisBenchmarkSeverityEnumHigh                CisBenchmarkSeverityEnum = "HIGH"
	CisBenchmarkSeverityEnumCritical            CisBenchmarkSeverityEnum = "CRITICAL"
)

type CisBenchmark struct {
	ProfileLevel *int32                    `json:"profileLevel"`
	Severity     *CisBenchmarkSeverityEnum `json:"severity"`
}
