import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudWebriskV1RawIndices
/** 
 * A set of raw indices to remove from a local list.
**/
export class GoogleCloudWebriskV1RawIndices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indices" })
  indices?: number[];
}
