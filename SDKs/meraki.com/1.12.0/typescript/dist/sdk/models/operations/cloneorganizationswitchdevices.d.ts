import { SpeakeasyBase } from "../../../internal/utils";
export declare class CloneOrganizationSwitchDevicesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CloneOrganizationSwitchDevicesRequestBody extends SpeakeasyBase {
    sourceSerial: string;
    targetSerials: string[];
}
export declare class CloneOrganizationSwitchDevicesRequest extends SpeakeasyBase {
    pathParams: CloneOrganizationSwitchDevicesPathParams;
    request: CloneOrganizationSwitchDevicesRequestBody;
}
export declare class CloneOrganizationSwitchDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cloneOrganizationSwitchDevices200ApplicationJsonObject?: Map<string, any>;
}
