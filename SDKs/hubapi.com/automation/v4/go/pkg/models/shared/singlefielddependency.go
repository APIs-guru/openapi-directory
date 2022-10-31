package shared




type SingleFieldDependencyDependencyTypeEnum string

const (
    SingleFieldDependencyDependencyTypeEnumSingleField SingleFieldDependencyDependencyTypeEnum = "SINGLE_FIELD"
)


type SingleFieldDependency struct {
    ControllingFieldName string `json:"controllingFieldName"`
    DependencyType SingleFieldDependencyDependencyTypeEnum `json:"dependencyType"`
    DependentFieldNames []string `json:"dependentFieldNames"`
    
}

