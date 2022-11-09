import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta } from "./meta";
import { CountriesRow } from "./countriesrow";
export declare class OpenAqCountriesResult extends SpeakeasyBase {
    meta?: Meta;
    results: CountriesRow[];
}
