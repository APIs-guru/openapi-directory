import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Registration } from "./registration";


// ListRegistrationsResponse
/** 
 * Response for the `ListRegistrations` method.
**/
export class ListRegistrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=registrations", elemType: shared.Registration })
  registrations?: Registration[];
}
