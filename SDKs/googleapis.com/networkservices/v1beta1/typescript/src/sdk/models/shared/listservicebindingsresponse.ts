import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceBinding } from "./servicebinding";



// ListServiceBindingsResponse
/** 
 * Response returned by the ListServiceBindings method.
**/
export class ListServiceBindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceBindings", elemType: ServiceBinding })
  serviceBindings?: ServiceBinding[];
}
