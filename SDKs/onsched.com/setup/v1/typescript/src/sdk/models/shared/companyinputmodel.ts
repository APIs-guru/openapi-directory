import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingWebhookUrl" })
  bookingWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=customerWebhookUrl" })
  customerWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=disableEmailAndSmsNotifications" })
  disableEmailAndSmsNotifications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationFromEmailAddress" })
  notificationFromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationFromName" })
  notificationFromName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationEmail" })
  registrationEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=reminderWebhookUrl" })
  reminderWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceWebhookUrl" })
  resourceWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookSignatureHash" })
  webhookSignatureHash?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
