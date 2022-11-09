import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TextMapping } from "./textmapping";
/**
 * Encoding of a text stream. For example, closed captions or subtitles.
**/
export declare class TextStream extends SpeakeasyBase {
    codec?: string;
    mapping?: TextMapping[];
}
