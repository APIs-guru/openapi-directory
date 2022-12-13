package shared

type AgentContactEditRequestTypesEnum string

const (
	AgentContactEditRequestTypesEnumBilling   AgentContactEditRequestTypesEnum = "billing"
	AgentContactEditRequestTypesEnumCompany   AgentContactEditRequestTypesEnum = "company"
	AgentContactEditRequestTypesEnumExecutive AgentContactEditRequestTypesEnum = "executive"
	AgentContactEditRequestTypesEnumOnline    AgentContactEditRequestTypesEnum = "online"
)

type AgentContactEditRequest struct {
	Email       *string                            `json:"email,omitempty"`
	FirstName   *string                            `json:"first_name,omitempty"`
	LastName    *string                            `json:"last_name,omitempty"`
	PhoneNumber *string                            `json:"phone_number,omitempty"`
	Title       *string                            `json:"title,omitempty"`
	Types       []AgentContactEditRequestTypesEnum `json:"types,omitempty"`
}
