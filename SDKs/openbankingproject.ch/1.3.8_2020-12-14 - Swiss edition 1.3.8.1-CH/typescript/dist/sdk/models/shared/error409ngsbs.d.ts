import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage409Sbs } from "./tppmessage409sbs";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 409.
 *
**/
export declare class Error409NgSbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage409Sbs[];
}
