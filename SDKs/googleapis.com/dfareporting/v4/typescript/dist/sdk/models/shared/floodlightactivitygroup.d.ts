import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
export declare enum FloodlightActivityGroupTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}
/**
 * Contains properties of a Floodlight activity group.
**/
export declare class FloodlightActivityGroup extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    floodlightConfigurationId?: string;
    floodlightConfigurationIdDimensionValue?: DimensionValue;
    id?: string;
    idDimensionValue?: DimensionValue;
    kind?: string;
    name?: string;
    subaccountId?: string;
    tagString?: string;
    type?: FloodlightActivityGroupTypeEnum;
}
