import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bioLink" })
  bioLink?: string;

  @Metadata({ data: "json, name=bookingNotification" })
  bookingNotification?: number;

  @Metadata({ data: "json, name=calendarAvailability" })
  calendarAvailability?: number;

  @Metadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @Metadata({ data: "json, name=deletedTime" })
  deletedTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=googleCalendarAuthUrl" })
  googleCalendarAuthUrl?: string;

  @Metadata({ data: "json, name=googleCalendarAuthorized" })
  googleCalendarAuthorized?: boolean;

  @Metadata({ data: "json, name=googleCalendarId" })
  googleCalendarId?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: number;

  @Metadata({ data: "json, name=hourly" })
  hourly?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationType" })
  notificationType?: number;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=outlookCalendarAuthUrl" })
  outlookCalendarAuthUrl?: string;

  @Metadata({ data: "json, name=outlookCalendarAuthorized" })
  outlookCalendarAuthorized?: boolean;

  @Metadata({ data: "json, name=outlookCalendarId" })
  outlookCalendarId?: string;

  @Metadata({ data: "json, name=skypeName" })
  skypeName?: string;

  @Metadata({ data: "json, name=sortKey" })
  sortKey?: number;

  @Metadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;

  @Metadata({ data: "json, name=timezoneOffset" })
  timezoneOffset?: number;
}
