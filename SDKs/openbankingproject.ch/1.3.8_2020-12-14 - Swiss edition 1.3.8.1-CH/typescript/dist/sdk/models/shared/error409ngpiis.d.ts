import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Piis } from "./tppmessage409piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 *
**/
export declare class Error409NgPiis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage409Piis[];
}
