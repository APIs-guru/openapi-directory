import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassItem } from "./classitem";
/**
 * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
**/
export declare class CustomClass extends SpeakeasyBase {
    customClassId?: string;
    items?: ClassItem[];
    name?: string;
}
