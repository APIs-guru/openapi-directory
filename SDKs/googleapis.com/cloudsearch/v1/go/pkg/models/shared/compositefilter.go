package shared

type CompositeFilterLogicOperatorEnum string

const (
	CompositeFilterLogicOperatorEnumAnd CompositeFilterLogicOperatorEnum = "AND"
	CompositeFilterLogicOperatorEnumOr  CompositeFilterLogicOperatorEnum = "OR"
	CompositeFilterLogicOperatorEnumNot CompositeFilterLogicOperatorEnum = "NOT"
)

type CompositeFilter struct {
	LogicOperator *CompositeFilterLogicOperatorEnum `json:"logicOperator"`
	SubFilters    []Filter                          `json:"subFilters"`
}
