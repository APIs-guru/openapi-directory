import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * User signature.
**/
export declare class Signature extends SpeakeasyBase {
    image?: Image;
    metadata?: Map<string, string>;
    signatureTime?: string;
    userId?: string;
}
