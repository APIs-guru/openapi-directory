import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutVolumesIdPathParams extends SpeakeasyBase {
    id: string;
}
/**
 * User-defined labels (key-value pairs)
**/
export declare class PutVolumesIdUpdateVolumeRequestLabels extends SpeakeasyBase {
    labelkey?: string;
}
export declare class PutVolumesIdUpdateVolumeRequest extends SpeakeasyBase {
    labels?: PutVolumesIdUpdateVolumeRequestLabels;
    name: string;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export declare class PutVolumesId200ApplicationJsonVolumeLocation extends SpeakeasyBase {
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
export declare class PutVolumesId200ApplicationJsonVolumeProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PutVolumesId200ApplicationJsonVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class PutVolumesId200ApplicationJsonVolume extends SpeakeasyBase {
    created: string;
    format: string;
    id: number;
    labels: Map<string, string>;
    linuxDevice: string;
    location: PutVolumesId200ApplicationJsonVolumeLocation;
    name: string;
    protection: PutVolumesId200ApplicationJsonVolumeProtection;
    server: number;
    size: number;
    status: PutVolumesId200ApplicationJsonVolumeStatusEnum;
}
export declare class PutVolumesId200ApplicationJson extends SpeakeasyBase {
    volume: PutVolumesId200ApplicationJsonVolume;
}
export declare class PutVolumesIdRequest extends SpeakeasyBase {
    pathParams: PutVolumesIdPathParams;
    request?: PutVolumesIdUpdateVolumeRequest;
}
export declare class PutVolumesIdResponse extends SpeakeasyBase {
    contentType: string;
    putVolumesId200ApplicationJsonObject?: PutVolumesId200ApplicationJson;
    statusCode: number;
}
