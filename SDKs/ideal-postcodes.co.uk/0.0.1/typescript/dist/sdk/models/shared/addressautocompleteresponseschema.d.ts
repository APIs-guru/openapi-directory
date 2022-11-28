import { SpeakeasyBase } from "../../../internal/utils";
import { AddressAutocompleteResult } from "./addressautocompleteresult";
export declare class AddressAutocompleteResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: AddressAutocompleteResult;
}
