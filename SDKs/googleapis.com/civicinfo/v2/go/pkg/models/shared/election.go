package shared

type ElectionShapeLookupBehaviorEnum string

const (
	ElectionShapeLookupBehaviorEnumShapeLookupDefault  ElectionShapeLookupBehaviorEnum = "shapeLookupDefault"
	ElectionShapeLookupBehaviorEnumShapeLookupDisabled ElectionShapeLookupBehaviorEnum = "shapeLookupDisabled"
	ElectionShapeLookupBehaviorEnumShapeLookupEnabled  ElectionShapeLookupBehaviorEnum = "shapeLookupEnabled"
)

type Election struct {
	ElectionDay         *string                          `json:"electionDay,omitempty"`
	ID                  *string                          `json:"id,omitempty"`
	Name                *string                          `json:"name,omitempty"`
	OcdDivisionID       *string                          `json:"ocdDivisionId,omitempty"`
	ShapeLookupBehavior *ElectionShapeLookupBehaviorEnum `json:"shapeLookupBehavior,omitempty"`
}
