package shared

type ProfileCondition struct {
	Condition  *ProfileConditionTypeEnum  `json:"Condition"`
	IsRequired *bool                      `json:"IsRequired"`
	Property   *ProfileConditionValueEnum `json:"Property"`
	Value      *string                    `json:"Value"`
}
