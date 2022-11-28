import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Ais } from "./tppmessage409ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 *
**/
export declare class Error409NgAis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage409Ais[];
}
