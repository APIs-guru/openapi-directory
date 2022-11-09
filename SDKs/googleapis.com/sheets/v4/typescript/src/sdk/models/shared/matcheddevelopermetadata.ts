import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";


// MatchedDeveloperMetadata
/** 
 * A developer metadata entry and the data filters specified in the original request that matched it.
**/
export class MatchedDeveloperMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilters", elemType: shared.DataFilter })
  dataFilters?: DataFilter[];

  @Metadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;
}
