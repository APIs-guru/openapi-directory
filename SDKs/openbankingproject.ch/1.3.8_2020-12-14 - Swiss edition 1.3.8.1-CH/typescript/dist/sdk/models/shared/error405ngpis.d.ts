import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage405Pis } from "./tppmessage405pis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 401.
 *
**/
export declare class Error405NgPis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage405Pis[];
}
