import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVolumesIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export declare class GetVolumesId200ApplicationJsonVolumeLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
/**
 * Protection configuration for the Resource
**/
export declare class GetVolumesId200ApplicationJsonVolumeProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetVolumesId200ApplicationJsonVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class GetVolumesId200ApplicationJsonVolume extends SpeakeasyBase {
    created: string;
    format: string;
    id: number;
    labels: Map<string, string>;
    linuxDevice: string;
    location: GetVolumesId200ApplicationJsonVolumeLocation;
    name: string;
    protection: GetVolumesId200ApplicationJsonVolumeProtection;
    server: number;
    size: number;
    status: GetVolumesId200ApplicationJsonVolumeStatusEnum;
}
export declare class GetVolumesId200ApplicationJson extends SpeakeasyBase {
    volume: GetVolumesId200ApplicationJsonVolume;
}
export declare class GetVolumesIdRequest extends SpeakeasyBase {
    pathParams: GetVolumesIdPathParams;
}
export declare class GetVolumesIdResponse extends SpeakeasyBase {
    contentType: string;
    getVolumesId200ApplicationJsonObject?: GetVolumesId200ApplicationJson;
    statusCode: number;
}
