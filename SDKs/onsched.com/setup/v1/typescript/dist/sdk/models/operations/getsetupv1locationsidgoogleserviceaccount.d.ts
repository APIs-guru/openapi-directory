import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsIdGoogleServiceAccountPathParams;
}
export declare class GetSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;
    statusCode: number;
}
