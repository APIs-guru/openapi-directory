import { SpeakeasyBase } from "../../../internal/utils";
import { GclbTarget } from "./gclbtarget";
/**
 * Defines a collection of certificate configurations.
**/
export declare class CertificateMap extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    gclbTargets?: GclbTarget[];
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
}
/**
 * Defines a collection of certificate configurations.
**/
export declare class CertificateMapInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    name?: string;
}
