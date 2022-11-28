import { SpeakeasyBase } from "../../../internal/utils";
import { KeyToPath } from "./keytopath";
/**
 * A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
**/
export declare class SecretVolumeSource extends SpeakeasyBase {
    defaultMode?: number;
    items?: KeyToPath[];
    optional?: boolean;
    secretName?: string;
}
