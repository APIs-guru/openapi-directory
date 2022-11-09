import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressSearchResult } from "./addresssearchresult";
export declare class AddressSearchResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: AddressSearchResult;
}
