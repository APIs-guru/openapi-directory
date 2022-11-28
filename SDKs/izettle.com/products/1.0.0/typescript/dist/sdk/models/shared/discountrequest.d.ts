import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class DiscountRequest extends SpeakeasyBase {
    amount?: Price;
    description?: string;
    externalReference?: string;
    imageLookupKeys?: string[];
    name?: string;
    percentage?: number;
    uuid: string;
}
