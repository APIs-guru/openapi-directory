import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { TppMessage404Pis } from "./tppmessage404pis";
/**
 * NextGen specific definition of reporting error information in case of a HTTP error code 404.
 *
**/
export declare class Error404NgPis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    tppMessages?: TppMessage404Pis[];
}
