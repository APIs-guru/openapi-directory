import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrganizationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    DeleteRequested = "DELETE_REQUESTED"
}


// Organization
/** 
 * The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong.
**/
export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=directoryCustomerId" })
  directoryCustomerId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: OrganizationStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
