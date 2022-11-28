import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Tenant } from "./tenant";



// ListTenantsResponse
/** 
 * The List tenants response object.
**/
export class ListTenantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tenants", elemType: Tenant })
  tenants?: Tenant[];
}
