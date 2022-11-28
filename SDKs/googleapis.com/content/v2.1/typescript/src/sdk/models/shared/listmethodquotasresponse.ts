import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MethodQuota } from "./methodquota";



// ListMethodQuotasResponse
/** 
 * Response message for the ListMethodQuotas method.
**/
export class ListMethodQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methodQuotas", elemType: MethodQuota })
  methodQuotas?: MethodQuota[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
