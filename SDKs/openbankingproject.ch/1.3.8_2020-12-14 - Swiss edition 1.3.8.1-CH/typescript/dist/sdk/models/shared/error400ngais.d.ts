import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage400Ais } from "./tppmessage400ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 400.
 *
**/
export declare class Error400NgAis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage400Ais[];
}
