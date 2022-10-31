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
	Access            *Access                                              `json:"access,omitempty"`
	CanonicalName     *string                                              `json:"canonicalName,omitempty"`
	Category          *string                                              `json:"category,omitempty"`
	Compliances       []Compliance                                         `json:"compliances,omitempty"`
	Connections       []Connection                                         `json:"connections,omitempty"`
	Contacts          map[string]ContactDetails                            `json:"contacts,omitempty"`
	Containers        []Container                                          `json:"containers,omitempty"`
	CreateTime        *string                                              `json:"createTime,omitempty"`
	Database          *Database                                            `json:"database,omitempty"`
	Description       *string                                              `json:"description,omitempty"`
	EventTime         *string                                              `json:"eventTime,omitempty"`
	Exfiltration      *Exfiltration                                        `json:"exfiltration,omitempty"`
	ExternalSystems   map[string]GoogleCloudSecuritycenterV1ExternalSystem `json:"externalSystems,omitempty"`
	ExternalURI       *string                                              `json:"externalUri,omitempty"`
	FindingClass      *FindingFindingClassEnum                             `json:"findingClass,omitempty"`
	IamBindings       []IamBinding                                         `json:"iamBindings,omitempty"`
	Indicator         *Indicator                                           `json:"indicator,omitempty"`
	Kubernetes        *Kubernetes                                          `json:"kubernetes,omitempty"`
	MitreAttack       *MitreAttack                                         `json:"mitreAttack,omitempty"`
	Mute              *FindingMuteEnum                                     `json:"mute,omitempty"`
	MuteInitiator     *string                                              `json:"muteInitiator,omitempty"`
	MuteUpdateTime    *string                                              `json:"muteUpdateTime,omitempty"`
	Name              *string                                              `json:"name,omitempty"`
	NextSteps         *string                                              `json:"nextSteps,omitempty"`
	Parent            *string                                              `json:"parent,omitempty"`
	ParentDisplayName *string                                              `json:"parentDisplayName,omitempty"`
	Processes         []Process                                            `json:"processes,omitempty"`
	ResourceName      *string                                              `json:"resourceName,omitempty"`
	SecurityMarks     *SecurityMarks                                       `json:"securityMarks,omitempty"`
	Severity          *FindingSeverityEnum                                 `json:"severity,omitempty"`
	SourceProperties  map[string]interface{}                               `json:"sourceProperties,omitempty"`
	State             *FindingStateEnum                                    `json:"state,omitempty"`
	Vulnerability     *Vulnerability                                       `json:"vulnerability,omitempty"`
}
