import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { BusinessHoursInputModel } from "./businesshoursinputmodel";
import { BusinessDefaultsInputModel } from "./businessdefaultsinputmodel";
import { OnlineSettingsInputModel } from "./onlinesettingsinputmodel";



export class LocationInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressInputModel;

  @SpeakeasyMetadata({ data: "json, name=adminEmail" })
  adminEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=adminName" })
  adminName?: string;

  @SpeakeasyMetadata({ data: "json, name=businessHours" })
  businessHours?: BusinessHoursInputModel;

  @SpeakeasyMetadata({ data: "json, name=defaults" })
  defaults?: BusinessDefaultsInputModel;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyId" })
  friendlyId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: OnlineSettingsInputModel;

  @SpeakeasyMetadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
