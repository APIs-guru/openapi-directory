import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataFilter } from "./datafilter";


// DeleteDeveloperMetadataRequest
/** 
 * A request to delete developer metadata.
**/
export class DeleteDeveloperMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilter" })
  dataFilter?: DataFilter;
}
