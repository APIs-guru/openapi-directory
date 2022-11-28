import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchRangeRequest
/** 
 * Request to search for an unused range within allocated ranges.
**/
export class SearchRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;
}
