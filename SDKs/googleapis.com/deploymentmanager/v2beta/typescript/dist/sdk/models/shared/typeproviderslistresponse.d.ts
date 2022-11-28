import { SpeakeasyBase } from "../../../internal/utils";
import { TypeProvider } from "./typeprovider";
/**
 * A response that returns all Type Providers supported by Deployment Manager
**/
export declare class TypeProvidersListResponse extends SpeakeasyBase {
    nextPageToken?: string;
    typeProviders?: TypeProvider[];
}
