import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage403Pis } from "./tppmessage403pis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 403.
 *
**/
export declare class Error403NgPis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage403Pis[];
}
