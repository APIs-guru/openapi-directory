import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypeProvider } from "./typeprovider";


// TypeProvidersListResponse
/** 
 * A response that returns all Type Providers supported by Deployment Manager
**/
export class TypeProvidersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=typeProviders", elemType: shared.TypeProvider })
  typeProviders?: TypeProvider[];
}
