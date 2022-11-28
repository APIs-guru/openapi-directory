import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOutlierHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostOutlierRequests extends SpeakeasyBase {
    outliersRequest?: shared.OutliersRequest;
    outliersRequest1?: shared.OutliersRequest;
    outliersRequest2?: shared.OutliersRequest;
}
export declare class PostOutlierRequest extends SpeakeasyBase {
    headers: PostOutlierHeaders;
    request?: PostOutlierRequests;
}
export declare class PostOutlierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    timeSeriesOutliersResponses?: shared.TimeSeriesOutliersResponse[];
}
