import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VolumeStatusEnum {
    Creating = "creating",
    Active = "active",
    Resizing = "resizing",
    ContactSupport = "contact_support"
}
/**
 * A Block Storage Volume associated with your Account.
 *
**/
export declare class Volume extends SpeakeasyBase {
    created?: Date;
    filesystemPath?: string;
    id?: number;
    label: string;
    linodeId?: number;
    linodeLabel?: string;
    region?: string;
    size?: number;
    status?: VolumeStatusEnum;
    tags?: string[];
    updated?: Date;
}
