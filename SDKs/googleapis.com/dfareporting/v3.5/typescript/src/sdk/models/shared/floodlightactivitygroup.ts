import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";


export enum FloodlightActivityGroupTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}


// FloodlightActivityGroup
/** 
 * Contains properties of a Floodlight activity group.
**/
export class FloodlightActivityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

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

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagString" })
  tagString?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FloodlightActivityGroupTypeEnum;
}
