package shared

type CreativeGroupAssignmentCreativeGroupNumberEnum string

const (
	CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne CreativeGroupAssignmentCreativeGroupNumberEnum = "CREATIVE_GROUP_ONE"
	CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo CreativeGroupAssignmentCreativeGroupNumberEnum = "CREATIVE_GROUP_TWO"
)

type CreativeGroupAssignment struct {
	CreativeGroupID     *string                                         `json:"creativeGroupId"`
	CreativeGroupNumber *CreativeGroupAssignmentCreativeGroupNumberEnum `json:"creativeGroupNumber"`
}
