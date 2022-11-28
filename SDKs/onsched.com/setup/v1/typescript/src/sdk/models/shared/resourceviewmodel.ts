import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResourceViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bioLink" })
  bioLink?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingNotification" })
  bookingNotification?: number;

  @SpeakeasyMetadata({ data: "json, name=calendarAvailability" })
  calendarAvailability?: number;

  @SpeakeasyMetadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletedTime" })
  deletedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=googleCalendarAuthUrl" })
  googleCalendarAuthUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=googleCalendarAuthorized" })
  googleCalendarAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=googleCalendarId" })
  googleCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=hourly" })
  hourly?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType?: number;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=outlookCalendarAuthUrl" })
  outlookCalendarAuthUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=outlookCalendarAuthorized" })
  outlookCalendarAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outlookCalendarId" })
  outlookCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=skypeName" })
  skypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=sortKey" })
  sortKey?: number;

  @SpeakeasyMetadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneId" })
  timezoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneOffset" })
  timezoneOffset?: number;
}
