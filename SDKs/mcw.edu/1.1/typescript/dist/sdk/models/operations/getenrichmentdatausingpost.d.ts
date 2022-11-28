import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnrichmentDataUsingPostRequest extends SpeakeasyBase {
    request: shared.EnrichmentGeneRequest;
}
export declare class GetEnrichmentDataUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
