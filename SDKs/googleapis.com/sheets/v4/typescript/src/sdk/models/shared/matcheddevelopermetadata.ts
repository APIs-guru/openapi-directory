import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";



// MatchedDeveloperMetadata
/** 
 * A developer metadata entry and the data filters specified in the original request that matched it.
**/
export class MatchedDeveloperMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];

  @SpeakeasyMetadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;
}
