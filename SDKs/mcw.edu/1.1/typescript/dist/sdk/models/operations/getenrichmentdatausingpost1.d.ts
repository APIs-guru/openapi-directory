import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnrichmentDataUsingPost1Request extends SpeakeasyBase {
    request: shared.EnrichmentRequest;
}
export declare class GetEnrichmentDataUsingPost1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
