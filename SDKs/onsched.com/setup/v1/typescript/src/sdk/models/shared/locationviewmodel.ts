import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminEmail" })
  adminEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=adminName" })
  adminName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyId" })
  friendlyId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryBusiness" })
  primaryBusiness?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primaryCalendarId" })
  primaryCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneIana" })
  timezoneIana?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneId" })
  timezoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneOffset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
