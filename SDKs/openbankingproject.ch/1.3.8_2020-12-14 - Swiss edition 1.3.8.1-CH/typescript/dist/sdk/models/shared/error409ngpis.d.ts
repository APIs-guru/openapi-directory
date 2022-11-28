import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Pis } from "./tppmessage409pis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 *
**/
export declare class Error409NgPis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage409Pis[];
}
