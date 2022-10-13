package shared

type GradeHistoryGradeChangeTypeEnum string

const (
	GradeHistoryGradeChangeTypeEnumUnknownGradeChangeType          GradeHistoryGradeChangeTypeEnum = "UNKNOWN_GRADE_CHANGE_TYPE"
	GradeHistoryGradeChangeTypeEnumDraftGradePointsEarnedChange    GradeHistoryGradeChangeTypeEnum = "DRAFT_GRADE_POINTS_EARNED_CHANGE"
	GradeHistoryGradeChangeTypeEnumAssignedGradePointsEarnedChange GradeHistoryGradeChangeTypeEnum = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE"
	GradeHistoryGradeChangeTypeEnumMaxPointsChange                 GradeHistoryGradeChangeTypeEnum = "MAX_POINTS_CHANGE"
)

type GradeHistory struct {
	ActorUserID     *string                          `json:"actorUserId"`
	GradeChangeType *GradeHistoryGradeChangeTypeEnum `json:"gradeChangeType"`
	GradeTimestamp  *string                          `json:"gradeTimestamp"`
	MaxPoints       *float64                         `json:"maxPoints"`
	PointsEarned    *float64                         `json:"pointsEarned"`
}
