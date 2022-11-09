import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseMetadata } from "./responsemetadata";
import { Tenant } from "./tenant";


// ListTenantsResponse
/** 
 * The List tenants response object.
**/
export class ListTenantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tenants", elemType: shared.Tenant })
  tenants?: Tenant[];
}
