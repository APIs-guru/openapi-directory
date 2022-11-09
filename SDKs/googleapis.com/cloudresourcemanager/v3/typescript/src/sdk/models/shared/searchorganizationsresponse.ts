import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Organization } from "./organization";


// SearchOrganizationsResponse
/** 
 * The response returned from the `SearchOrganizations` method.
**/
export class SearchOrganizationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=organizations", elemType: shared.Organization })
  organizations?: Organization[];
}
