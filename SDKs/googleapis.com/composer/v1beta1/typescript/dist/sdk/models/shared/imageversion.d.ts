import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Image Version information
**/
export declare class ImageVersion extends SpeakeasyBase {
    creationDisabled?: boolean;
    imageVersionId?: string;
    isDefault?: boolean;
    releaseDate?: Date;
    supportedPythonVersions?: string[];
    upgradeDisabled?: boolean;
}
