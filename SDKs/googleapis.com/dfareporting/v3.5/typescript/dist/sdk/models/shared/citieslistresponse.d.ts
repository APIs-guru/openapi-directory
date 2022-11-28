import { SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";
/**
 * City List Response
**/
export declare class CitiesListResponse extends SpeakeasyBase {
    cities?: City[];
    kind?: string;
}
