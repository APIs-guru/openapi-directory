package shared

// RiskValueReadV1ConditionalOn
// Array of risk parameters that triggered this question. Only returned by /applications endpoint.
type RiskValueReadV1ConditionalOn struct {
	RiskParameterID [][]string `json:"risk_parameter_id,omitempty"`
}

type RiskValueReadV1InputTypeEnum string

const (
	RiskValueReadV1InputTypeEnumDate       RiskValueReadV1InputTypeEnum = "date"
	RiskValueReadV1InputTypeEnumNumber     RiskValueReadV1InputTypeEnum = "number"
	RiskValueReadV1InputTypeEnumInteger    RiskValueReadV1InputTypeEnum = "integer"
	RiskValueReadV1InputTypeEnumSelectOne  RiskValueReadV1InputTypeEnum = "select_one"
	RiskValueReadV1InputTypeEnumSelectMany RiskValueReadV1InputTypeEnum = "select_many"
	RiskValueReadV1InputTypeEnumAddress    RiskValueReadV1InputTypeEnum = "address"
	RiskValueReadV1InputTypeEnumClaimEvent RiskValueReadV1InputTypeEnum = "claim_event"
	RiskValueReadV1InputTypeEnumEmail      RiskValueReadV1InputTypeEnum = "email"
	RiskValueReadV1InputTypeEnumPhone      RiskValueReadV1InputTypeEnum = "phone"
	RiskValueReadV1InputTypeEnumYear       RiskValueReadV1InputTypeEnum = "year"
	RiskValueReadV1InputTypeEnumShortText  RiskValueReadV1InputTypeEnum = "short_text"
	RiskValueReadV1InputTypeEnumLongText   RiskValueReadV1InputTypeEnum = "long_text"
	RiskValueReadV1InputTypeEnumWebsite    RiskValueReadV1InputTypeEnum = "website"
	RiskValueReadV1InputTypeEnumFile       RiskValueReadV1InputTypeEnum = "file"
)

type RiskValueReadV1RequiredForEnum string

const (
	RiskValueReadV1RequiredForEnumQuote RiskValueReadV1RequiredForEnum = "quote"
	RiskValueReadV1RequiredForEnumBind  RiskValueReadV1RequiredForEnum = "bind"
	RiskValueReadV1RequiredForEnumNull  RiskValueReadV1RequiredForEnum = "null"
)

// RiskValueReadV1
// Risk values assign specific values to risk parameters.
type RiskValueReadV1 struct {
	AffectsConditions *bool                            `json:"affects_conditions,omitempty"`
	ChildRiskValues   []RiskValueReadV1                `json:"child_risk_values,omitempty"`
	ConditionalOn     *RiskValueReadV1ConditionalOn    `json:"conditional_on,omitempty"`
	CreatesArray      *bool                            `json:"creates_array,omitempty"`
	InputType         *RiskValueReadV1InputTypeEnum    `json:"input_type,omitempty"`
	Instance          *string                          `json:"instance,omitempty"`
	ParameterText     *ParameterTextV1                 `json:"parameter_text,omitempty"`
	RelevantProducts  []string                         `json:"relevant_products,omitempty"`
	RequiredFor       []RiskValueReadV1RequiredForEnum `json:"required_for,omitempty"`
	RiskParameterID   *string                          `json:"risk_parameter_id,omitempty"`
	Schema            map[string]interface{}           `json:"schema,omitempty"`
	Text              *string                          `json:"text,omitempty"`
	Value             *interface{}                     `json:"value,omitempty"`
}
