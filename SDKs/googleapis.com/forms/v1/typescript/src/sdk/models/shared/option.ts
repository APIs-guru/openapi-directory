import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";

export enum OptionGoToActionEnum {
    GoToActionUnspecified = "GO_TO_ACTION_UNSPECIFIED"
,    NextSection = "NEXT_SECTION"
,    RestartForm = "RESTART_FORM"
,    SubmitForm = "SUBMIT_FORM"
}


// Option
/** 
 * An option for a Choice question.
**/
export class Option extends SpeakeasyBase {
  @Metadata({ data: "json, name=goToAction" })
  goToAction?: OptionGoToActionEnum;

  @Metadata({ data: "json, name=goToSectionId" })
  goToSectionId?: string;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=isOther" })
  isOther?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
