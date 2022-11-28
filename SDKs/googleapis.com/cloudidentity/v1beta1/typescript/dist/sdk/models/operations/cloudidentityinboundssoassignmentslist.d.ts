import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityInboundSsoAssignmentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityInboundSsoAssignmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsListRequest extends SpeakeasyBase {
    queryParams: CloudidentityInboundSsoAssignmentsListQueryParams;
    security: CloudidentityInboundSsoAssignmentsListSecurity;
}
export declare class CloudidentityInboundSsoAssignmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listInboundSsoAssignmentsResponse?: shared.ListInboundSsoAssignmentsResponse;
    statusCode: number;
}
