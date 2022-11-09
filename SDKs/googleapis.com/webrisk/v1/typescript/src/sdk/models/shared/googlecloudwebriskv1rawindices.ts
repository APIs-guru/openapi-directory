import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudWebriskV1RawIndices
/** 
 * A set of raw indices to remove from a local list.
**/
export class GoogleCloudWebriskV1RawIndices extends SpeakeasyBase {
  @Metadata({ data: "json, name=indices" })
  indices?: number[];
}
