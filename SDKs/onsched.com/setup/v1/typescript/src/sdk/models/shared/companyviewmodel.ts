import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=bookingWebhookUrl" })
  bookingWebhookUrl?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=customerWebhookUrl" })
  customerWebhookUrl?: string;

  @Metadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @Metadata({ data: "json, name=deletedTime" })
  deletedTime?: string;

  @Metadata({ data: "json, name=disableEmailAndSmsNotifications" })
  disableEmailAndSmsNotifications?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationFromEmailAddress" })
  notificationFromEmailAddress?: string;

  @Metadata({ data: "json, name=notificationFromName" })
  notificationFromName?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=registrationDate" })
  registrationDate?: string;

  @Metadata({ data: "json, name=registrationEmail" })
  registrationEmail?: string;

  @Metadata({ data: "json, name=reminderWebhookUrl" })
  reminderWebhookUrl?: string;

  @Metadata({ data: "json, name=resourceWebhookUrl" })
  resourceWebhookUrl?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
