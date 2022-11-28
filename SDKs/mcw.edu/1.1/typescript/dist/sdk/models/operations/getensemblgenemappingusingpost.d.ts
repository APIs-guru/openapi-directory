import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnsemblGeneMappingUsingPostRequest extends SpeakeasyBase {
    request?: shared.RgdidListRequest;
}
export declare class GetEnsemblGeneMappingUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
