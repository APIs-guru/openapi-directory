import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";



// UpdateDeveloperMetadataRequest
/** 
 * A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
**/
export class UpdateDeveloperMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];

  @SpeakeasyMetadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;
}
