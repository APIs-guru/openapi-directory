import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Organization } from "./organization";


// ListOrganizationsResponse
/** 
 * The response returned from the `ListOrganizations` method.
**/
export class ListOrganizationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=organizations", elemType: shared.Organization })
  organizations?: Organization[];
}
