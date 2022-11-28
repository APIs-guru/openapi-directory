import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnsemblProteinMappingUsingPostRequest extends SpeakeasyBase {
    request?: shared.RgdidListRequest;
}
export declare class GetEnsemblProteinMappingUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
