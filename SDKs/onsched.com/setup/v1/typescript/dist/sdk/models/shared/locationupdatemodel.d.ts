import { SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { BusinessHoursUpdateModel } from "./businesshoursupdatemodel";
import { BusinessDefaultsUpdateModel } from "./businessdefaultsupdatemodel";
import { OnlineSettingsUpdateModel } from "./onlinesettingsupdatemodel";
export declare class LocationUpdateModel extends SpeakeasyBase {
    address?: AddressUpdateModel;
    adminEmail?: string;
    adminName?: string;
    businessHours?: BusinessHoursUpdateModel;
    defaults?: BusinessDefaultsUpdateModel;
    email?: string;
    fax?: string;
    friendlyId?: string;
    maxCapacity?: number;
    maxGroupSize?: number;
    name?: string;
    phone?: string;
    regionId?: string;
    settings?: OnlineSettingsUpdateModel;
    timezoneName?: string;
    website?: string;
}
