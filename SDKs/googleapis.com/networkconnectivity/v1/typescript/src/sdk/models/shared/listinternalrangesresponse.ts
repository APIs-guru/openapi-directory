import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InternalRange } from "./internalrange";



// ListInternalRangesResponse
/** 
 * Response for InternalRange.ListInternalRanges
**/
export class ListInternalRangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=internalRanges", elemType: InternalRange })
  internalRanges?: InternalRange[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
