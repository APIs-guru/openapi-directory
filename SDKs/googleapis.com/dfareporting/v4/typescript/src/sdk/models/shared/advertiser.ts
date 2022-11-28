import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { MeasurementPartnerAdvertiserLink } from "./measurementpartneradvertiserlink";


export enum AdvertiserStatusEnum {
    Approved = "APPROVED",
    OnHold = "ON_HOLD"
}


// Advertiser
/** 
 * Contains properties of a Campaign Manager advertiser.
**/
export class Advertiser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserGroupId" })
  advertiserGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffix" })
  clickThroughUrlSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagId" })
  defaultClickThroughEventTagId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultEmail" })
  defaultEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigurationIdDimensionValue" })
  floodlightConfigurationIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementPartnerLink" })
  measurementPartnerLink?: MeasurementPartnerAdvertiserLink;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalFloodlightConfigurationId" })
  originalFloodlightConfigurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AdvertiserStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;
}
