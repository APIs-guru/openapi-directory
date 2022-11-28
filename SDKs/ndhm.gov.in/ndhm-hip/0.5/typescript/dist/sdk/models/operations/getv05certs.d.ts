import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV05CertsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    certs?: shared.Certs;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
