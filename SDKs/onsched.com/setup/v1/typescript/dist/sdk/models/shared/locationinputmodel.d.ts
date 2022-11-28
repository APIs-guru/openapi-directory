import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { BusinessHoursInputModel } from "./businesshoursinputmodel";
import { BusinessDefaultsInputModel } from "./businessdefaultsinputmodel";
import { OnlineSettingsInputModel } from "./onlinesettingsinputmodel";
export declare class LocationInputModel extends SpeakeasyBase {
    address?: AddressInputModel;
    adminEmail?: string;
    adminName?: string;
    businessHours?: BusinessHoursInputModel;
    defaults?: BusinessDefaultsInputModel;
    email?: string;
    fax?: string;
    friendlyId?: string;
    maxCapacity?: number;
    maxGroupSize?: number;
    name?: string;
    phone?: string;
    regionId?: string;
    settings?: OnlineSettingsInputModel;
    timezoneName?: string;
    website?: string;
}
