import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHgncMappingUsingPostRequest extends SpeakeasyBase {
    request?: shared.RgdidListRequest;
}
export declare class GetHgncMappingUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
