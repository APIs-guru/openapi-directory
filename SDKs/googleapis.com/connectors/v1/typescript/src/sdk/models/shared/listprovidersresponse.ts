import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Provider } from "./provider";


// ListProvidersResponse
/** 
 * Response message for Connectors.ListProviders.
**/
export class ListProvidersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=providers", elemType: shared.Provider })
  providers?: Provider[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
