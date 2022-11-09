import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";


// UpdateDeveloperMetadataRequest
/** 
 * A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
**/
export class UpdateDeveloperMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilters", elemType: shared.DataFilter })
  dataFilters?: DataFilter[];

  @Metadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;

  @Metadata({ data: "json, name=fields" })
  fields?: string;
}
