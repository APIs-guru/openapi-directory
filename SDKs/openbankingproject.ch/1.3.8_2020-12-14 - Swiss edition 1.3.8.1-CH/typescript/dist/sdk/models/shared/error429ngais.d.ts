import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage429Ais } from "./tppmessage429ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 429.
 *
**/
export declare class Error429NgAis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage429Ais[];
}
