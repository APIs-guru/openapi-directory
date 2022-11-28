import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceBinding } from "./servicebinding";
/**
 * Response returned by the ListServiceBindings method.
**/
export declare class ListServiceBindingsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    serviceBindings?: ServiceBinding[];
}
