import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class AddressSearchResult extends SpeakeasyBase {
    hits?: Address[];
    limit?: number;
    page?: number;
    total?: number;
}
