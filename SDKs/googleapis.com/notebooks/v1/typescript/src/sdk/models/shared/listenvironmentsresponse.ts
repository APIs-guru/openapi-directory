import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";



// ListEnvironmentsResponse
/** 
 * Response for listing environments.
**/
export class ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: Environment })
  environments?: Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
