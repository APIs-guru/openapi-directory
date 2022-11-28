import { SpeakeasyBase } from "../../../internal/utils";
import { KeyToPath } from "./keytopath";
/**
 * Not supported by Cloud Run Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
**/
export declare class ConfigMapVolumeSource extends SpeakeasyBase {
    defaultMode?: number;
    items?: KeyToPath[];
    name?: string;
    optional?: boolean;
}
