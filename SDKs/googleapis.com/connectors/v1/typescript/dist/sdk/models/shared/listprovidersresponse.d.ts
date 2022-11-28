import { SpeakeasyBase } from "../../../internal/utils";
import { Provider } from "./provider";
/**
 * Response message for Connectors.ListProviders.
**/
export declare class ListProvidersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    providers?: Provider[];
    unreachable?: string[];
}
