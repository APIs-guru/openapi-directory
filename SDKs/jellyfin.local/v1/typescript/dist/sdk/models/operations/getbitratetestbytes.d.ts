import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBitrateTestBytesQueryParams extends SpeakeasyBase {
    size?: number;
}
export declare class GetBitrateTestBytesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetBitrateTestBytesRequest extends SpeakeasyBase {
    queryParams: GetBitrateTestBytesQueryParams;
    security: GetBitrateTestBytesSecurity;
}
export declare class GetBitrateTestBytesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getBitrateTestBytes200ApplicationOctetStreamBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
