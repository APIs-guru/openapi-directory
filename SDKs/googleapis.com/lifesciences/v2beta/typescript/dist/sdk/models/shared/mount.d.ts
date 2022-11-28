import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Carries information about a particular disk mount inside a container.
**/
export declare class Mount extends SpeakeasyBase {
    disk?: string;
    path?: string;
    readOnly?: boolean;
}
