import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { CountriesRow } from "./countriesrow";
export declare class OpenAqCountriesResult extends SpeakeasyBase {
    meta?: Meta;
    results: CountriesRow[];
}
