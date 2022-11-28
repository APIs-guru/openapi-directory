import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";



// SearchOrganizationsResponse
/** 
 * The response returned from the `SearchOrganizations` method.
**/
export class SearchOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: Organization })
  organizations?: Organization[];
}
