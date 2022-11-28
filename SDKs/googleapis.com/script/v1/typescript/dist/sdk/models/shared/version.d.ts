import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
**/
export declare class Version extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    scriptId?: string;
    versionNumber?: number;
}
