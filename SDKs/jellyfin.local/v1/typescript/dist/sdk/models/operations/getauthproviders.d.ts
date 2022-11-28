import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuthProvidersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetAuthProvidersRequest extends SpeakeasyBase {
    security: GetAuthProvidersSecurity;
}
export declare class GetAuthProvidersResponse extends SpeakeasyBase {
    contentType: string;
    nameIdPairs?: shared.NameIdPair[];
    statusCode: number;
}
