import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPasswordResetProvidersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPasswordResetProvidersRequest extends SpeakeasyBase {
    security: GetPasswordResetProvidersSecurity;
}
export declare class GetPasswordResetProvidersResponse extends SpeakeasyBase {
    contentType: string;
    nameIdPairs?: shared.NameIdPair[];
    statusCode: number;
}
