import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Contains properties of a creative group.
**/
export declare class CreativeGroup extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    groupNumber?: number;
    id?: string;
    kind?: string;
    name?: string;
    subaccountId?: string;
}
