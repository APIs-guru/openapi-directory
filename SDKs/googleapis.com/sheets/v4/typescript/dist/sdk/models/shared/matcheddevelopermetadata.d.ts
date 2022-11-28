import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";
/**
 * A developer metadata entry and the data filters specified in the original request that matched it.
**/
export declare class MatchedDeveloperMetadata extends SpeakeasyBase {
    dataFilters?: DataFilter[];
    developerMetadata?: DeveloperMetadata;
}
