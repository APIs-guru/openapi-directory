import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GradeHistoryGradeChangeTypeEnum {
    UnknownGradeChangeType = "UNKNOWN_GRADE_CHANGE_TYPE"
,    DraftGradePointsEarnedChange = "DRAFT_GRADE_POINTS_EARNED_CHANGE"
,    AssignedGradePointsEarnedChange = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE"
,    MaxPointsChange = "MAX_POINTS_CHANGE"
}


// GradeHistory
/** 
 * The history of each grade on this submission.
**/
export class GradeHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=actorUserId" })
  actorUserId?: string;

  @Metadata({ data: "json, name=gradeChangeType" })
  gradeChangeType?: GradeHistoryGradeChangeTypeEnum;

  @Metadata({ data: "json, name=gradeTimestamp" })
  gradeTimestamp?: string;

  @Metadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @Metadata({ data: "json, name=pointsEarned" })
  pointsEarned?: number;
}
