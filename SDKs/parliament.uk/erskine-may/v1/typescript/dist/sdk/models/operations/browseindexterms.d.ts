import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BrowseIndexTermsQueryParams extends SpeakeasyBase {
    skip?: number;
    startLetter?: string;
    take?: number;
}
export declare class BrowseIndexTermsRequest extends SpeakeasyBase {
    queryParams: BrowseIndexTermsQueryParams;
}
export declare class BrowseIndexTermsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySearchErskineMayIndexTermSearchResult?: shared.ErskineMaySearchErskineMayIndexTermSearchResult;
    statusCode: number;
}
