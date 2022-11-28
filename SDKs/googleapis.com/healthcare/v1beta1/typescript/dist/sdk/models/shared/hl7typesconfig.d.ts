import { SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
import { VersionSource } from "./versionsource";
/**
 * Root config for HL7v2 datatype definitions for a specific HL7v2 version.
**/
export declare class Hl7TypesConfig extends SpeakeasyBase {
    type?: Type[];
    version?: VersionSource[];
}
