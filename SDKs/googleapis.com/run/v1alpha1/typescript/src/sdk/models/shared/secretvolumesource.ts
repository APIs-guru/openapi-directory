import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyToPath } from "./keytopath";


// SecretVolumeSource
/** 
 * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
**/
export class SecretVolumeSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultMode" })
  defaultMode?: number;

  @Metadata({ data: "json, name=items", elemType: shared.KeyToPath })
  items?: KeyToPath[];

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;

  @Metadata({ data: "json, name=secretName" })
  secretName?: string;
}
