import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";

export enum AdvertiserStatusEnum {
    Approved = "APPROVED"
,    OnHold = "ON_HOLD"
}


// Advertiser
/** 
 * Contains properties of a Campaign Manager advertiser.
**/
export class Advertiser extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserGroupId" })
  advertiserGroupId?: string;

  @Metadata({ data: "json, name=clickThroughUrlSuffix" })
  clickThroughUrlSuffix?: string;

  @Metadata({ data: "json, name=defaultClickThroughEventTagId" })
  defaultClickThroughEventTagId?: string;

  @Metadata({ data: "json, name=defaultEmail" })
  defaultEmail?: string;

  @Metadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @Metadata({ data: "json, name=floodlightConfigurationIdDimensionValue" })
  floodlightConfigurationIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originalFloodlightConfigurationId" })
  originalFloodlightConfigurationId?: string;

  @Metadata({ data: "json, name=status" })
  status?: AdvertiserStatusEnum;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;
}
