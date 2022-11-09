import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuizSettings } from "./quizsettings";


// FormSettings
/** 
 * A form's settings.
**/
export class FormSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=quizSettings" })
  quizSettings?: QuizSettings;
}
