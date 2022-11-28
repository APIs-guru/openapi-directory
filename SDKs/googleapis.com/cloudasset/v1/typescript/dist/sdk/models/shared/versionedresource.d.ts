import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource representation as defined by the corresponding service providing the resource for a given API version.
**/
export declare class VersionedResource extends SpeakeasyBase {
    resource?: Map<string, any>;
    version?: string;
}
