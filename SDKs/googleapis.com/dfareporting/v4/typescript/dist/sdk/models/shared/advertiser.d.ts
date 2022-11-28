import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { MeasurementPartnerAdvertiserLink } from "./measurementpartneradvertiserlink";
export declare enum AdvertiserStatusEnum {
    Approved = "APPROVED",
    OnHold = "ON_HOLD"
}
/**
 * Contains properties of a Campaign Manager advertiser.
**/
export declare class Advertiser extends SpeakeasyBase {
    accountId?: string;
    advertiserGroupId?: string;
    clickThroughUrlSuffix?: string;
    defaultClickThroughEventTagId?: string;
    defaultEmail?: string;
    floodlightConfigurationId?: string;
    floodlightConfigurationIdDimensionValue?: DimensionValue;
    id?: string;
    idDimensionValue?: DimensionValue;
    kind?: string;
    measurementPartnerLink?: MeasurementPartnerAdvertiserLink;
    name?: string;
    originalFloodlightConfigurationId?: string;
    status?: AdvertiserStatusEnum;
    subaccountId?: string;
    suspended?: boolean;
}
