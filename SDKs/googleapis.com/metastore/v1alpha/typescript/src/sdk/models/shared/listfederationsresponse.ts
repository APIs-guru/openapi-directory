import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Federation } from "./federation";



// ListFederationsResponse
/** 
 * Response message for ListFederations
**/
export class ListFederationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=federations", elemType: Federation })
  federations?: Federation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
