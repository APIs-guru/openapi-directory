import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceBinding } from "./servicebinding";


// ListServiceBindingsResponse
/** 
 * Response returned by the ListServiceBindings method.
**/
export class ListServiceBindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=serviceBindings", elemType: shared.ServiceBinding })
  serviceBindings?: ServiceBinding[];
}
