package shared

type CasePriorityEnum string

const (
	CasePriorityEnumPriorityUnspecified CasePriorityEnum = "PRIORITY_UNSPECIFIED"
	CasePriorityEnumP0                  CasePriorityEnum = "P0"
	CasePriorityEnumP1                  CasePriorityEnum = "P1"
	CasePriorityEnumP2                  CasePriorityEnum = "P2"
	CasePriorityEnumP3                  CasePriorityEnum = "P3"
	CasePriorityEnumP4                  CasePriorityEnum = "P4"
)

type CaseSeverityEnum string

const (
	CaseSeverityEnumSeverityUnspecified CaseSeverityEnum = "SEVERITY_UNSPECIFIED"
	CaseSeverityEnumS0                  CaseSeverityEnum = "S0"
	CaseSeverityEnumS1                  CaseSeverityEnum = "S1"
	CaseSeverityEnumS2                  CaseSeverityEnum = "S2"
	CaseSeverityEnumS3                  CaseSeverityEnum = "S3"
	CaseSeverityEnumS4                  CaseSeverityEnum = "S4"
)

type CaseStateEnum string

const (
	CaseStateEnumStateUnspecified        CaseStateEnum = "STATE_UNSPECIFIED"
	CaseStateEnumNew                     CaseStateEnum = "NEW"
	CaseStateEnumInProgressGoogleSupport CaseStateEnum = "IN_PROGRESS_GOOGLE_SUPPORT"
	CaseStateEnumActionRequired          CaseStateEnum = "ACTION_REQUIRED"
	CaseStateEnumSolutionProvided        CaseStateEnum = "SOLUTION_PROVIDED"
	CaseStateEnumClosed                  CaseStateEnum = "CLOSED"
)

type Case struct {
	Classification           *CaseClassification `json:"classification"`
	CreateTime               *string             `json:"createTime"`
	Creator                  *Actor              `json:"creator"`
	Description              *string             `json:"description"`
	DisplayName              *string             `json:"displayName"`
	Escalated                *bool               `json:"escalated"`
	Name                     *string             `json:"name"`
	Priority                 *CasePriorityEnum   `json:"priority"`
	Severity                 *CaseSeverityEnum   `json:"severity"`
	State                    *CaseStateEnum      `json:"state"`
	SubscriberEmailAddresses []string            `json:"subscriberEmailAddresses"`
	TestCase                 *bool               `json:"testCase"`
	TimeZone                 *string             `json:"timeZone"`
	UpdateTime               *string             `json:"updateTime"`
}
