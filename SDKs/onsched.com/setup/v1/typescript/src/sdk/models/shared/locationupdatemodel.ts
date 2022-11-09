import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { BusinessHoursUpdateModel } from "./businesshoursupdatemodel";
import { BusinessDefaultsUpdateModel } from "./businessdefaultsupdatemodel";
import { OnlineSettingsUpdateModel } from "./onlinesettingsupdatemodel";


export class LocationUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AddressUpdateModel;

  @Metadata({ data: "json, name=adminEmail" })
  adminEmail?: string;

  @Metadata({ data: "json, name=adminName" })
  adminName?: string;

  @Metadata({ data: "json, name=businessHours" })
  businessHours?: BusinessHoursUpdateModel;

  @Metadata({ data: "json, name=defaults" })
  defaults?: BusinessDefaultsUpdateModel;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=friendlyId" })
  friendlyId?: string;

  @Metadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=regionId" })
  regionId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: OnlineSettingsUpdateModel;

  @Metadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
