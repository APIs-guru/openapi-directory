import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocationViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminEmail" })
  adminEmail?: string;

  @Metadata({ data: "json, name=adminName" })
  adminName?: string;

  @Metadata({ data: "json, name=companyId" })
  companyId?: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=friendlyId" })
  friendlyId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=primaryBusiness" })
  primaryBusiness?: boolean;

  @Metadata({ data: "json, name=primaryCalendarId" })
  primaryCalendarId?: string;

  @Metadata({ data: "json, name=regionId" })
  regionId?: string;

  @Metadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;

  @Metadata({ data: "json, name=timezoneOffset" })
  timezoneOffset?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
