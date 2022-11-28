import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyToPath } from "./keytopath";



// ConfigMapVolumeSource
/** 
 * Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
**/
export class ConfigMapVolumeSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultMode" })
  defaultMode?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: KeyToPath })
  items?: KeyToPath[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;
}
