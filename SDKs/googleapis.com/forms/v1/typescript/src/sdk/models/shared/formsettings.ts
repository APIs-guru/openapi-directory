import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuizSettings } from "./quizsettings";



// FormSettings
/** 
 * A form's settings.
**/
export class FormSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quizSettings" })
  quizSettings?: QuizSettings;
}
