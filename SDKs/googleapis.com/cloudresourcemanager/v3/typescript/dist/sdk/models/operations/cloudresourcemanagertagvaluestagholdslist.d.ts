import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesTagHoldsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudresourcemanagerTagValuesTagHoldsListQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagValuesTagHoldsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTagHoldsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTagHoldsListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagValuesTagHoldsListSecurityOption1;
    option2?: CloudresourcemanagerTagValuesTagHoldsListSecurityOption2;
}
export declare class CloudresourcemanagerTagValuesTagHoldsListRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesTagHoldsListPathParams;
    queryParams: CloudresourcemanagerTagValuesTagHoldsListQueryParams;
    security: CloudresourcemanagerTagValuesTagHoldsListSecurity;
}
export declare class CloudresourcemanagerTagValuesTagHoldsListResponse extends SpeakeasyBase {
    contentType: string;
    listTagHoldsResponse?: shared.ListTagHoldsResponse;
    statusCode: number;
}
