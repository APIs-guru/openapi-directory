import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class DiscountResponse extends SpeakeasyBase {
    amount?: Price;
    created: Date;
    description?: string;
    etag: string;
    externalReference?: string;
    imageLookupKeys?: string[];
    name: string;
    percentage?: number;
    updated: Date;
    updatedBy?: string;
    uuid: string;
}
