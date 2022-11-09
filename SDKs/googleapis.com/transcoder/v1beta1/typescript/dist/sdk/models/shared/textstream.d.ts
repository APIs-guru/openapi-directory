import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TextAtom } from "./textatom";
/**
 * Encoding of a text stream. For example, closed captions or subtitles.
**/
export declare class TextStream extends SpeakeasyBase {
    codec?: string;
    languageCode?: string;
    mapping?: TextAtom[];
}
