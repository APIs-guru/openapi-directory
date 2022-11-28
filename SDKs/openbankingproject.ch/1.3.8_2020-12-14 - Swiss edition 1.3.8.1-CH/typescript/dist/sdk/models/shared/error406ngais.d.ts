import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage406Ais } from "./tppmessage406ais";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 406.
 *
**/
export declare class Error406NgAis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage406Ais[];
}
