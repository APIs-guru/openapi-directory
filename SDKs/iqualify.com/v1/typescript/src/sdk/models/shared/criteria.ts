import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Criteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasCompletedCourse" })
  hasCompletedCourse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPassedMandatoryAssessedQuizzes" })
  hasPassedMandatoryAssessedQuizzes?: boolean;
}
