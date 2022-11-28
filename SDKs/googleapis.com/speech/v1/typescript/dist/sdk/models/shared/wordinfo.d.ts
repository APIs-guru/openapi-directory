import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Word-specific information for recognized words.
**/
export declare class WordInfo extends SpeakeasyBase {
    confidence?: number;
    endTime?: string;
    speakerTag?: number;
    startTime?: string;
    word?: string;
}
