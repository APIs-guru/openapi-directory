import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuizSettings
/** 
 * Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
**/
export class QuizSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=isQuiz" })
  isQuiz?: boolean;
}
