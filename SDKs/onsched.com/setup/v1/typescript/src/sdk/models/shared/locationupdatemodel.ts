import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { BusinessHoursUpdateModel } from "./businesshoursupdatemodel";
import { BusinessDefaultsUpdateModel } from "./businessdefaultsupdatemodel";
import { OnlineSettingsUpdateModel } from "./onlinesettingsupdatemodel";



export class LocationUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=adminEmail" })
  adminEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=adminName" })
  adminName?: string;

  @SpeakeasyMetadata({ data: "json, name=businessHours" })
  businessHours?: BusinessHoursUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=defaults" })
  defaults?: BusinessDefaultsUpdateModel;

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
  settings?: OnlineSettingsUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
