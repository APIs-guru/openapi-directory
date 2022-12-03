package shared

type CoverageValueReadV1InputTypeEnum string

const (
	CoverageValueReadV1InputTypeEnumDate       CoverageValueReadV1InputTypeEnum = "date"
	CoverageValueReadV1InputTypeEnumNumber     CoverageValueReadV1InputTypeEnum = "number"
	CoverageValueReadV1InputTypeEnumInteger    CoverageValueReadV1InputTypeEnum = "integer"
	CoverageValueReadV1InputTypeEnumSelectOne  CoverageValueReadV1InputTypeEnum = "select_one"
	CoverageValueReadV1InputTypeEnumSelectMany CoverageValueReadV1InputTypeEnum = "select_many"
	CoverageValueReadV1InputTypeEnumAddress    CoverageValueReadV1InputTypeEnum = "address"
	CoverageValueReadV1InputTypeEnumClaimEvent CoverageValueReadV1InputTypeEnum = "claim_event"
	CoverageValueReadV1InputTypeEnumEmail      CoverageValueReadV1InputTypeEnum = "email"
	CoverageValueReadV1InputTypeEnumPhone      CoverageValueReadV1InputTypeEnum = "phone"
	CoverageValueReadV1InputTypeEnumYear       CoverageValueReadV1InputTypeEnum = "year"
	CoverageValueReadV1InputTypeEnumShortText  CoverageValueReadV1InputTypeEnum = "short_text"
	CoverageValueReadV1InputTypeEnumLongText   CoverageValueReadV1InputTypeEnum = "long_text"
	CoverageValueReadV1InputTypeEnumWebsite    CoverageValueReadV1InputTypeEnum = "website"
	CoverageValueReadV1InputTypeEnumFile       CoverageValueReadV1InputTypeEnum = "file"
)

type CoverageValueReadV1RequiredForEnum string

const (
	CoverageValueReadV1RequiredForEnumQuote CoverageValueReadV1RequiredForEnum = "quote"
	CoverageValueReadV1RequiredForEnumBind  CoverageValueReadV1RequiredForEnum = "bind"
	CoverageValueReadV1RequiredForEnumNull  CoverageValueReadV1RequiredForEnum = "null"
)

// CoverageValueReadV1
// Coverage values assign specific values to coverage parameters.
type CoverageValueReadV1 struct {
	AffectsConditions   *bool                                `json:"affects_conditions,omitempty"`
	ChildCoverageValues []CoverageValueReadV1                `json:"child_coverage_values,omitempty"`
	CoverageParameterID *string                              `json:"coverage_parameter_id,omitempty"`
	CreatesArray        *bool                                `json:"creates_array,omitempty"`
	InputType           *CoverageValueReadV1InputTypeEnum    `json:"input_type,omitempty"`
	Instance            *string                              `json:"instance,omitempty"`
	ParameterText       *ParameterTextV1                     `json:"parameter_text,omitempty"`
	RelevantProducts    []string                             `json:"relevant_products,omitempty"`
	RequiredFor         []CoverageValueReadV1RequiredForEnum `json:"required_for,omitempty"`
	Schema              map[string]interface{}               `json:"schema,omitempty"`
	Text                *string                              `json:"text,omitempty"`
	Value               *interface{}                         `json:"value,omitempty"`
}
