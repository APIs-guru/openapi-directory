import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryGrantableRolesRequestViewEnum {
    Basic = "BASIC"
,    Full = "FULL"
}


// QueryGrantableRolesRequest
/** 
 * The grantable role query request.
**/
export class QueryGrantableRolesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=view" })
  view?: QueryGrantableRolesRequestViewEnum;
}
