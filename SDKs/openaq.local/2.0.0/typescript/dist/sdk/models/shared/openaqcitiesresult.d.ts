import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta } from "./meta";
import { CitiesRow } from "./citiesrow";
export declare class OpenAqCitiesResult extends SpeakeasyBase {
    meta?: Meta;
    results: CitiesRow[];
}
