package shared

type ConditionalSingleFieldDependencyDependencyTypeEnum string

const (
	ConditionalSingleFieldDependencyDependencyTypeEnumConditionalSingleField ConditionalSingleFieldDependencyDependencyTypeEnum = "CONDITIONAL_SINGLE_FIELD"
)

type ConditionalSingleFieldDependency struct {
	ControllingFieldName  string                                             `json:"controllingFieldName"`
	ControllingFieldValue string                                             `json:"controllingFieldValue"`
	DependencyType        ConditionalSingleFieldDependencyDependencyTypeEnum `json:"dependencyType"`
	DependentFieldNames   []string                                           `json:"dependentFieldNames"`
}
