import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageInput } from "./image";
import { Image } from "./image";


export enum OptionGoToActionEnum {
    GoToActionUnspecified = "GO_TO_ACTION_UNSPECIFIED",
    NextSection = "NEXT_SECTION",
    RestartForm = "RESTART_FORM",
    SubmitForm = "SUBMIT_FORM"
}


// OptionInput
/** 
 * An option for a Choice question.
**/
export class OptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=goToAction" })
  goToAction?: OptionGoToActionEnum;

  @SpeakeasyMetadata({ data: "json, name=goToSectionId" })
  goToSectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageInput;

  @SpeakeasyMetadata({ data: "json, name=isOther" })
  isOther?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Option
/** 
 * An option for a Choice question.
**/
export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=goToAction" })
  goToAction?: OptionGoToActionEnum;

  @SpeakeasyMetadata({ data: "json, name=goToSectionId" })
  goToSectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=isOther" })
  isOther?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
