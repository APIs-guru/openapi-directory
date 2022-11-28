import { SpeakeasyBase } from "../../../internal/utils";
import { ImageInput } from "./image";
import { Image } from "./image";
export declare enum OptionGoToActionEnum {
    GoToActionUnspecified = "GO_TO_ACTION_UNSPECIFIED",
    NextSection = "NEXT_SECTION",
    RestartForm = "RESTART_FORM",
    SubmitForm = "SUBMIT_FORM"
}
/**
 * An option for a Choice question.
**/
export declare class OptionInput extends SpeakeasyBase {
    goToAction?: OptionGoToActionEnum;
    goToSectionId?: string;
    image?: ImageInput;
    isOther?: boolean;
    value?: string;
}
/**
 * An option for a Choice question.
**/
export declare class Option extends SpeakeasyBase {
    goToAction?: OptionGoToActionEnum;
    goToSectionId?: string;
    image?: Image;
    isOther?: boolean;
    value?: string;
}
