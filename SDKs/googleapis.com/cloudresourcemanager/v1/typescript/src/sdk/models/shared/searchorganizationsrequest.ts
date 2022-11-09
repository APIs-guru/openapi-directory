import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchOrganizationsRequest
/** 
 * The request sent to the `SearchOrganizations` method.
**/
export class SearchOrganizationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
