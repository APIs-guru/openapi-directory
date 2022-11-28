import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchOrganizationsRequest
/** 
 * The request sent to the `SearchOrganizations` method.
**/
export class SearchOrganizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
