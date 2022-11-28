import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage400Pis } from "./tppmessage400pis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 *
**/
export declare class Error400NgPis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage400Pis[];
}
