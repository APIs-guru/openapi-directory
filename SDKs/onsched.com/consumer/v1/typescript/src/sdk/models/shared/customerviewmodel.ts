import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=birthdate" })
  birthdate?: string;

  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @Metadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @Metadata({ data: "json, name=deletedTime" })
  deletedTime?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailInfo" })
  emailInfo?: boolean;

  @Metadata({ data: "json, name=emailPromotion" })
  emailPromotion?: boolean;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inviteEmailSent" })
  inviteEmailSent?: string;

  @Metadata({ data: "json, name=lastVisitDate" })
  lastVisitDate?: string;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @Metadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationType" })
  notificationType?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=registeredBy" })
  registeredBy?: string;

  @Metadata({ data: "json, name=registrationDate" })
  registrationDate?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=verificationDate" })
  verificationDate?: string;

  @Metadata({ data: "json, name=verifiedBy" })
  verifiedBy?: string;

  @Metadata({ data: "json, name=welcomeEmailSent" })
  welcomeEmailSent?: string;
}
