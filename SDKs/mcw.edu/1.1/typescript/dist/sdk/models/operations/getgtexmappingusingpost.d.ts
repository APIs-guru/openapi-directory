import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGtexMappingUsingPostRequest extends SpeakeasyBase {
    request?: shared.RgdidListRequest;
}
export declare class GetGtexMappingUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
