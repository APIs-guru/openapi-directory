import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
/**
 * ImageVersion information
**/
export declare class ImageVersion extends SpeakeasyBase {
    creationDisabled?: boolean;
    imageVersionId?: string;
    isDefault?: boolean;
    releaseDate?: Date;
    supportedPythonVersions?: string[];
    upgradeDisabled?: boolean;
}
