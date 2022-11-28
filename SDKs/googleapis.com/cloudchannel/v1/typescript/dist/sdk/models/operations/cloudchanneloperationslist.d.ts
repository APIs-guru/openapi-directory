import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum CloudchannelOperationsListFilterEnum {
    Unspecified = "UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudchannelOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: CloudchannelOperationsListFilterEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelOperationsListRequest extends SpeakeasyBase {
    pathParams: CloudchannelOperationsListPathParams;
    queryParams: CloudchannelOperationsListQueryParams;
    security: CloudchannelOperationsListSecurity;
}
export declare class CloudchannelOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
