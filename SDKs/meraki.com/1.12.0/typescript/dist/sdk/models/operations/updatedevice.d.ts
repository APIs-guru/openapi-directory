import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDevicePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class UpdateDeviceRequestBody extends SpeakeasyBase {
    address?: string;
    floorPlanId?: string;
    lat?: number;
    lng?: number;
    moveMapMarker?: boolean;
    name?: string;
    notes?: string;
    switchProfileId?: string;
    tags?: string[];
}
export declare class UpdateDeviceRequest extends SpeakeasyBase {
    pathParams: UpdateDevicePathParams;
    request?: UpdateDeviceRequestBody;
}
export declare class UpdateDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDevice200ApplicationJsonObject?: Map<string, any>;
}
