import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SmartdevicemanagementEnterprisesStructuresRoomsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams extends SpeakeasyBase {
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
export declare class SmartdevicemanagementEnterprisesStructuresRoomsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsListRequest extends SpeakeasyBase {
    pathParams: SmartdevicemanagementEnterprisesStructuresRoomsListPathParams;
    queryParams: SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams;
    security: SmartdevicemanagementEnterprisesStructuresRoomsListSecurity;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsListResponse extends SpeakeasyBase {
    contentType: string;
    googleHomeEnterpriseSdmV1ListRoomsResponse?: shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse;
    statusCode: number;
}
