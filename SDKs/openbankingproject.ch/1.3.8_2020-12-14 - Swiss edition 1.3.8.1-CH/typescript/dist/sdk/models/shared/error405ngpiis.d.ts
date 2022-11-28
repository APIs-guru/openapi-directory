import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage405Piis } from "./tppmessage405piis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 *
**/
export declare class Error405NgPiis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage405Piis[];
}
