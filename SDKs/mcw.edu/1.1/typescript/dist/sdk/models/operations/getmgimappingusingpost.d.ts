import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMgiMappingUsingPostRequest extends SpeakeasyBase {
    request?: shared.RgdidListRequest;
}
export declare class GetMgiMappingUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
