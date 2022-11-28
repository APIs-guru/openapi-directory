import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeProvider } from "./typeprovider";



// TypeProvidersListResponse
/** 
 * A response that returns all Type Providers supported by Deployment Manager
**/
export class TypeProvidersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=typeProviders", elemType: TypeProvider })
  typeProviders?: TypeProvider[];
}
