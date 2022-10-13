package shared

type ElectionShapeLookupBehaviorEnum string

const (
	ElectionShapeLookupBehaviorEnumShapeLookupDefault  ElectionShapeLookupBehaviorEnum = "shapeLookupDefault"
	ElectionShapeLookupBehaviorEnumShapeLookupDisabled ElectionShapeLookupBehaviorEnum = "shapeLookupDisabled"
	ElectionShapeLookupBehaviorEnumShapeLookupEnabled  ElectionShapeLookupBehaviorEnum = "shapeLookupEnabled"
)

type Election struct {
	ElectionDay         *string                          `json:"electionDay"`
	ID                  *string                          `json:"id"`
	Name                *string                          `json:"name"`
	OcdDivisionID       *string                          `json:"ocdDivisionId"`
	ShapeLookupBehavior *ElectionShapeLookupBehaviorEnum `json:"shapeLookupBehavior"`
}
