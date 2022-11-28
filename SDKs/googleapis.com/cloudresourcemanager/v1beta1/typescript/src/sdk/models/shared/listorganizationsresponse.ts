import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";



// ListOrganizationsResponse
/** 
 * The response returned from the `ListOrganizations` method.
**/
export class ListOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: Organization })
  organizations?: Organization[];
}
