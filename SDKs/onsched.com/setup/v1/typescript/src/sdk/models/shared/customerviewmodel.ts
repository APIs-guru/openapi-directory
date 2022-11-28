import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birthdate" })
  birthdate?: string;

  @SpeakeasyMetadata({ data: "json, name=businessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletedTime" })
  deletedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailInfo" })
  emailInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailPromotion" })
  emailPromotion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inviteEmailSent" })
  inviteEmailSent?: string;

  @SpeakeasyMetadata({ data: "json, name=lastVisitDate" })
  lastVisitDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=registeredBy" })
  registeredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationDate" })
  registrationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationDate" })
  verificationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedBy" })
  verifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=welcomeEmailSent" })
  welcomeEmailSent?: string;
}
