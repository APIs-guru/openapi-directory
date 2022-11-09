import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";

export enum FloodlightActivityGroupTypeEnum {
    Counter = "COUNTER"
,    Sale = "SALE"
}


// FloodlightActivityGroup
/** 
 * Contains properties of a Floodlight activity group.
**/
export class FloodlightActivityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

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

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=tagString" })
  tagString?: string;

  @Metadata({ data: "json, name=type" })
  type?: FloodlightActivityGroupTypeEnum;
}
