import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Tenant } from "./tenant";
/**
 * The List tenants response object.
**/
export declare class ListTenantsResponse extends SpeakeasyBase {
    metadata?: ResponseMetadata;
    nextPageToken?: string;
    tenants?: Tenant[];
}
