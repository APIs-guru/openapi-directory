import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403Piis } from "./tppmessage403piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 *
**/
export declare class Error403NgPiis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage403Piis[];
}
