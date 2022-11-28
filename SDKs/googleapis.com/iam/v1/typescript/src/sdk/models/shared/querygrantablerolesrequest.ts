import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryGrantableRolesRequestViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}


// QueryGrantableRolesRequest
/** 
 * The grantable role query request.
**/
export class QueryGrantableRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: QueryGrantableRolesRequestViewEnum;
}
