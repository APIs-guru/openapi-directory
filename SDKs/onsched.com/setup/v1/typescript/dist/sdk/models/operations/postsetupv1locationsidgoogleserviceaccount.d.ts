import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1LocationsIdGoogleServiceAccountRequests extends SpeakeasyBase {
    googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;
    googleServiceAccountCreds1?: shared.GoogleServiceAccountCreds;
    googleServiceAccountCreds2?: shared.GoogleServiceAccountCreds;
    googleServiceAccountCreds3?: shared.GoogleServiceAccountCreds;
}
export declare class PostSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
    pathParams: PostSetupV1LocationsIdGoogleServiceAccountPathParams;
    request?: PostSetupV1LocationsIdGoogleServiceAccountRequests;
}
export declare class PostSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;
    statusCode: number;
}
