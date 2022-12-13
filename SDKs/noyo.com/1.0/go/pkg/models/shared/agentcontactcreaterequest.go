package shared

type AgentContactCreateRequestTypesEnum string

const (
	AgentContactCreateRequestTypesEnumBilling   AgentContactCreateRequestTypesEnum = "billing"
	AgentContactCreateRequestTypesEnumCompany   AgentContactCreateRequestTypesEnum = "company"
	AgentContactCreateRequestTypesEnumExecutive AgentContactCreateRequestTypesEnum = "executive"
	AgentContactCreateRequestTypesEnumOnline    AgentContactCreateRequestTypesEnum = "online"
)

type AgentContactCreateRequest struct {
	Email       string                               `json:"email"`
	FirstName   string                               `json:"first_name"`
	LastName    string                               `json:"last_name"`
	PhoneNumber *string                              `json:"phone_number,omitempty"`
	Title       string                               `json:"title"`
	Types       []AgentContactCreateRequestTypesEnum `json:"types"`
}
