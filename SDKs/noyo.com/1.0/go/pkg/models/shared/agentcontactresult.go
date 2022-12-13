package shared

type AgentContactResultTypesEnum string

const (
	AgentContactResultTypesEnumBilling   AgentContactResultTypesEnum = "billing"
	AgentContactResultTypesEnumCompany   AgentContactResultTypesEnum = "company"
	AgentContactResultTypesEnumExecutive AgentContactResultTypesEnum = "executive"
	AgentContactResultTypesEnumOnline    AgentContactResultTypesEnum = "online"
)

type AgentContactResult struct {
	AgentID     string                        `json:"agent_id"`
	Created     int64                         `json:"created"`
	Email       string                        `json:"email"`
	FirstName   string                        `json:"first_name"`
	ID          string                        `json:"id"`
	LastName    string                        `json:"last_name"`
	Modified    int64                         `json:"modified"`
	PhoneNumber *string                       `json:"phone_number,omitempty"`
	Title       string                        `json:"title"`
	Types       []AgentContactResultTypesEnum `json:"types"`
	Version     string                        `json:"version"`
}
