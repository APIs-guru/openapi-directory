import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Provider } from "./provider";



// ListProvidersResponse
/** 
 * The response message for the `ListProviders` method.
**/
export class ListProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=providers", elemType: Provider })
  providers?: Provider[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
