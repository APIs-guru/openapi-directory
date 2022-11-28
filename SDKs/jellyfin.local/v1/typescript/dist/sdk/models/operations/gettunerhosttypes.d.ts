import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTunerHostTypesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetTunerHostTypesRequest extends SpeakeasyBase {
    security: GetTunerHostTypesSecurity;
}
export declare class GetTunerHostTypesResponse extends SpeakeasyBase {
    contentType: string;
    nameIdPairs?: shared.NameIdPair[];
    statusCode: number;
}
