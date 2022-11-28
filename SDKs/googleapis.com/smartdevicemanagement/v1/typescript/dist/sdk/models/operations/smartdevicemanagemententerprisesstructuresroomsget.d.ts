import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsGetRequest extends SpeakeasyBase {
    pathParams: SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams;
    queryParams: SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams;
    security: SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity;
}
export declare class SmartdevicemanagementEnterprisesStructuresRoomsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleHomeEnterpriseSdmV1Room?: shared.GoogleHomeEnterpriseSdmV1Room;
    statusCode: number;
}
