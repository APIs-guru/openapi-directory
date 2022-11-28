import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsPatchDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsPatchDeploymentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchDeploymentsListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchDeploymentsListPathParams;
    queryParams: OsconfigProjectsPatchDeploymentsListQueryParams;
    security: OsconfigProjectsPatchDeploymentsListSecurity;
}
export declare class OsconfigProjectsPatchDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    listPatchDeploymentsResponse?: shared.ListPatchDeploymentsResponse;
    statusCode: number;
}
