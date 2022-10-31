package shared

type CompositeFilterLogicOperatorEnum string

const (
	CompositeFilterLogicOperatorEnumAnd CompositeFilterLogicOperatorEnum = "AND"
	CompositeFilterLogicOperatorEnumOr  CompositeFilterLogicOperatorEnum = "OR"
	CompositeFilterLogicOperatorEnumNot CompositeFilterLogicOperatorEnum = "NOT"
)

type CompositeFilter struct {
	LogicOperator *CompositeFilterLogicOperatorEnum `json:"logicOperator,omitempty"`
	SubFilters    []Filter                          `json:"subFilters,omitempty"`
}
