import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Registration } from "./registration";



// ListRegistrationsResponse
/** 
 * Response for the `ListRegistrations` method.
**/
export class ListRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registrations", elemType: Registration })
  registrations?: Registration[];
}
