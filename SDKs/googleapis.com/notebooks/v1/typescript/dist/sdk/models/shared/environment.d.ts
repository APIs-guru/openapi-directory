import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";
import { VmImage } from "./vmimage";
/**
 * Definition of a software environment that is used to start a notebook instance.
**/
export declare class EnvironmentInput extends SpeakeasyBase {
    containerImage?: ContainerImage;
    description?: string;
    displayName?: string;
    postStartupScript?: string;
    vmImage?: VmImage;
}
/**
 * Definition of a software environment that is used to start a notebook instance.
**/
export declare class Environment extends SpeakeasyBase {
    containerImage?: ContainerImage;
    createTime?: string;
    description?: string;
    displayName?: string;
    name?: string;
    postStartupScript?: string;
    vmImage?: VmImage;
}
