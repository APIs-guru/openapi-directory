package shared

type GradeHistoryGradeChangeTypeEnum string

const (
	GradeHistoryGradeChangeTypeEnumUnknownGradeChangeType          GradeHistoryGradeChangeTypeEnum = "UNKNOWN_GRADE_CHANGE_TYPE"
	GradeHistoryGradeChangeTypeEnumDraftGradePointsEarnedChange    GradeHistoryGradeChangeTypeEnum = "DRAFT_GRADE_POINTS_EARNED_CHANGE"
	GradeHistoryGradeChangeTypeEnumAssignedGradePointsEarnedChange GradeHistoryGradeChangeTypeEnum = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE"
	GradeHistoryGradeChangeTypeEnumMaxPointsChange                 GradeHistoryGradeChangeTypeEnum = "MAX_POINTS_CHANGE"
)

type GradeHistory struct {
	ActorUserID     *string                          `json:"actorUserId,omitempty"`
	GradeChangeType *GradeHistoryGradeChangeTypeEnum `json:"gradeChangeType,omitempty"`
	GradeTimestamp  *string                          `json:"gradeTimestamp,omitempty"`
	MaxPoints       *float64                         `json:"maxPoints,omitempty"`
	PointsEarned    *float64                         `json:"pointsEarned,omitempty"`
}
