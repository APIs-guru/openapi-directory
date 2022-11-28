import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsBitbucketServerConfigsListRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams;
    queryParams: CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams;
    security: CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity;
}
export declare class CloudbuildProjectsLocationsBitbucketServerConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listBitbucketServerConfigsResponse?: shared.ListBitbucketServerConfigsResponse;
    statusCode: number;
}
