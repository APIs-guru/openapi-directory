package shared

type FindingFindingClassEnum string

const (
	FindingFindingClassEnumFindingClassUnspecified FindingFindingClassEnum = "FINDING_CLASS_UNSPECIFIED"
	FindingFindingClassEnumThreat                  FindingFindingClassEnum = "THREAT"
	FindingFindingClassEnumVulnerability           FindingFindingClassEnum = "VULNERABILITY"
	FindingFindingClassEnumMisconfiguration        FindingFindingClassEnum = "MISCONFIGURATION"
	FindingFindingClassEnumObservation             FindingFindingClassEnum = "OBSERVATION"
	FindingFindingClassEnumSccError                FindingFindingClassEnum = "SCC_ERROR"
)

type FindingMuteEnum string

const (
	FindingMuteEnumMuteUnspecified FindingMuteEnum = "MUTE_UNSPECIFIED"
	FindingMuteEnumMuted           FindingMuteEnum = "MUTED"
	FindingMuteEnumUnmuted         FindingMuteEnum = "UNMUTED"
	FindingMuteEnumUndefined       FindingMuteEnum = "UNDEFINED"
)

type FindingSeverityEnum string

const (
	FindingSeverityEnumSeverityUnspecified FindingSeverityEnum = "SEVERITY_UNSPECIFIED"
	FindingSeverityEnumCritical            FindingSeverityEnum = "CRITICAL"
	FindingSeverityEnumHigh                FindingSeverityEnum = "HIGH"
	FindingSeverityEnumMedium              FindingSeverityEnum = "MEDIUM"
	FindingSeverityEnumLow                 FindingSeverityEnum = "LOW"
)

type FindingStateEnum string

const (
	FindingStateEnumStateUnspecified FindingStateEnum = "STATE_UNSPECIFIED"
	FindingStateEnumActive           FindingStateEnum = "ACTIVE"
	FindingStateEnumInactive         FindingStateEnum = "INACTIVE"
)

type Finding struct {
	Access            *Access                                              `json:"access"`
	CanonicalName     *string                                              `json:"canonicalName"`
	Category          *string                                              `json:"category"`
	Compliances       []Compliance                                         `json:"compliances"`
	Connections       []Connection                                         `json:"connections"`
	Contacts          map[string]ContactDetails                            `json:"contacts"`
	Containers        []Container                                          `json:"containers"`
	CreateTime        *string                                              `json:"createTime"`
	Database          *Database                                            `json:"database"`
	Description       *string                                              `json:"description"`
	EventTime         *string                                              `json:"eventTime"`
	Exfiltration      *Exfiltration                                        `json:"exfiltration"`
	ExternalSystems   map[string]GoogleCloudSecuritycenterV1ExternalSystem `json:"externalSystems"`
	ExternalURI       *string                                              `json:"externalUri"`
	FindingClass      *FindingFindingClassEnum                             `json:"findingClass"`
	IamBindings       []IamBinding                                         `json:"iamBindings"`
	Indicator         *Indicator                                           `json:"indicator"`
	Kubernetes        *Kubernetes                                          `json:"kubernetes"`
	MitreAttack       *MitreAttack                                         `json:"mitreAttack"`
	Mute              *FindingMuteEnum                                     `json:"mute"`
	MuteInitiator     *string                                              `json:"muteInitiator"`
	MuteUpdateTime    *string                                              `json:"muteUpdateTime"`
	Name              *string                                              `json:"name"`
	NextSteps         *string                                              `json:"nextSteps"`
	Parent            *string                                              `json:"parent"`
	ParentDisplayName *string                                              `json:"parentDisplayName"`
	Processes         []Process                                            `json:"processes"`
	ResourceName      *string                                              `json:"resourceName"`
	SecurityMarks     *SecurityMarks                                       `json:"securityMarks"`
	Severity          *FindingSeverityEnum                                 `json:"severity"`
	SourceProperties  map[string]interface{}                               `json:"sourceProperties"`
	State             *FindingStateEnum                                    `json:"state"`
	Vulnerability     *Vulnerability                                       `json:"vulnerability"`
}
