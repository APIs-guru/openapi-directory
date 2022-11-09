import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Provider } from "./provider";
/**
 * The response message for the `ListProviders` method.
**/
export declare class ListProvidersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    providers?: Provider[];
    unreachable?: string[];
}
