package shared




type CasePriorityEnum string

const (
    CasePriorityEnumPriorityUnspecified CasePriorityEnum = "PRIORITY_UNSPECIFIED"
CasePriorityEnumP0 CasePriorityEnum = "P0"
CasePriorityEnumP1 CasePriorityEnum = "P1"
CasePriorityEnumP2 CasePriorityEnum = "P2"
CasePriorityEnumP3 CasePriorityEnum = "P3"
CasePriorityEnumP4 CasePriorityEnum = "P4"
)



type CaseSeverityEnum string

const (
    CaseSeverityEnumSeverityUnspecified CaseSeverityEnum = "SEVERITY_UNSPECIFIED"
CaseSeverityEnumS0 CaseSeverityEnum = "S0"
CaseSeverityEnumS1 CaseSeverityEnum = "S1"
CaseSeverityEnumS2 CaseSeverityEnum = "S2"
CaseSeverityEnumS3 CaseSeverityEnum = "S3"
CaseSeverityEnumS4 CaseSeverityEnum = "S4"
)



type CaseStateEnum string

const (
    CaseStateEnumStateUnspecified CaseStateEnum = "STATE_UNSPECIFIED"
CaseStateEnumNew CaseStateEnum = "NEW"
CaseStateEnumInProgressGoogleSupport CaseStateEnum = "IN_PROGRESS_GOOGLE_SUPPORT"
CaseStateEnumActionRequired CaseStateEnum = "ACTION_REQUIRED"
CaseStateEnumSolutionProvided CaseStateEnum = "SOLUTION_PROVIDED"
CaseStateEnumClosed CaseStateEnum = "CLOSED"
)


type Case struct {
    Classification *CaseClassification `json:"classification,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Creator *Actor `json:"creator,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Escalated *bool `json:"escalated,omitempty"`
    Name *string `json:"name,omitempty"`
    Priority *CasePriorityEnum `json:"priority,omitempty"`
    Severity *CaseSeverityEnum `json:"severity,omitempty"`
    State *CaseStateEnum `json:"state,omitempty"`
    SubscriberEmailAddresses []string `json:"subscriberEmailAddresses,omitempty"`
    TestCase *bool `json:"testCase,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

