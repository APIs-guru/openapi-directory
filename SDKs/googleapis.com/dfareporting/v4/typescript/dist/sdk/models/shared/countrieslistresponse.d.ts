import { SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";
/**
 * Country List Response
**/
export declare class CountriesListResponse extends SpeakeasyBase {
    countries?: Country[];
    kind?: string;
}
