import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyToPath } from "./keytopath";


// ConfigMapVolumeSource
/** 
 * Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
**/
export class ConfigMapVolumeSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultMode" })
  defaultMode?: number;

  @Metadata({ data: "json, name=items", elemType: shared.KeyToPath })
  items?: KeyToPath[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;
}
