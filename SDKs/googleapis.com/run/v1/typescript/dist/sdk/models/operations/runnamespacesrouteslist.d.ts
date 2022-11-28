import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesRoutesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesRoutesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    continue?: string;
    fieldSelector?: string;
    fields?: string;
    includeUninitialized?: boolean;
    key?: string;
    labelSelector?: string;
    limit?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resourceVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
    watch?: boolean;
}
export declare class RunNamespacesRoutesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesRoutesListRequest extends SpeakeasyBase {
    pathParams: RunNamespacesRoutesListPathParams;
    queryParams: RunNamespacesRoutesListQueryParams;
    security: RunNamespacesRoutesListSecurity;
}
export declare class RunNamespacesRoutesListResponse extends SpeakeasyBase {
    contentType: string;
    listRoutesResponse?: shared.ListRoutesResponse;
    statusCode: number;
}
