import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams extends SpeakeasyBase {
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
export declare class SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest extends SpeakeasyBase {
    pathParams: SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams;
    queryParams: SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams;
    request?: shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
    security: SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;
}
export declare class SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse extends SpeakeasyBase {
    contentType: string;
    googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse?: shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse;
    statusCode: number;
}
