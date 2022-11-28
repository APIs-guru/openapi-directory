import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VolumeMount describes a mounting of a Volume within a container.
**/
export declare class VolumeMount extends SpeakeasyBase {
    mountPath?: string;
    name?: string;
    readOnly?: boolean;
    subPath?: string;
}
