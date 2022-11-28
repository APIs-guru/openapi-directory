import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuizSettings
/** 
 * Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
**/
export class QuizSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isQuiz" })
  isQuiz?: boolean;
}
