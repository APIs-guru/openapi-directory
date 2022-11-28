import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangeLog
/** 
 * Describes a change that a user has made to a resource.
**/
export class ChangeLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=changeTime" })
  changeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=userProfileId" })
  userProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=userProfileName" })
  userProfileName?: string;
}
