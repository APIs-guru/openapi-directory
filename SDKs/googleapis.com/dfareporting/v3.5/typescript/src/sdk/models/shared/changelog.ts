import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChangeLog
/** 
 * Describes a change that a user has made to a resource.
**/
export class ChangeLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=changeTime" })
  changeTime?: Date;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newValue" })
  newValue?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @Metadata({ data: "json, name=userProfileId" })
  userProfileId?: string;

  @Metadata({ data: "json, name=userProfileName" })
  userProfileName?: string;
}
