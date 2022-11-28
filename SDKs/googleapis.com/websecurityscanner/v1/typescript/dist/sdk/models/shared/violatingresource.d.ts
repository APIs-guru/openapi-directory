import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
**/
export declare class ViolatingResource extends SpeakeasyBase {
    contentType?: string;
    resourceUrl?: string;
}
