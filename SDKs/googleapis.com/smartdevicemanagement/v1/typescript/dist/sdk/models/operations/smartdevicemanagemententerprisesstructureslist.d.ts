import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SmartdevicemanagementEnterprisesStructuresListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SmartdevicemanagementEnterprisesStructuresListQueryParams extends SpeakeasyBase {
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
export declare class SmartdevicemanagementEnterprisesStructuresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SmartdevicemanagementEnterprisesStructuresListRequest extends SpeakeasyBase {
    pathParams: SmartdevicemanagementEnterprisesStructuresListPathParams;
    queryParams: SmartdevicemanagementEnterprisesStructuresListQueryParams;
    security: SmartdevicemanagementEnterprisesStructuresListSecurity;
}
export declare class SmartdevicemanagementEnterprisesStructuresListResponse extends SpeakeasyBase {
    contentType: string;
    googleHomeEnterpriseSdmV1ListStructuresResponse?: shared.GoogleHomeEnterpriseSdmV1ListStructuresResponse;
    statusCode: number;
}
