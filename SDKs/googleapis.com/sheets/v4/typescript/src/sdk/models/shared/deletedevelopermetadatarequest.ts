import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";



// DeleteDeveloperMetadataRequest
/** 
 * A request to delete developer metadata.
**/
export class DeleteDeveloperMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilter" })
  dataFilter?: DataFilter;
}
