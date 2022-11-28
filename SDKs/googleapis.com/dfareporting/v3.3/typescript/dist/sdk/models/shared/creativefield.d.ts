import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Contains properties of a creative field.
**/
export declare class CreativeField extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    id?: string;
    kind?: string;
    name?: string;
    subaccountId?: string;
}
