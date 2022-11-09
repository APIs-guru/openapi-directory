import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchRangeRequest
/** 
 * Request to search for an unused range within allocated ranges.
**/
export class SearchRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @Metadata({ data: "json, name=network" })
  network?: string;
}
