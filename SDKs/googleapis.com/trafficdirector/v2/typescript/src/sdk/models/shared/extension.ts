import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildVersion } from "./buildversion";



// Extension
/** 
 * Version and identification for an Envoy extension. [#next-free-field: 6]
**/
export class Extension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=typeDescriptor" })
  typeDescriptor?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: BuildVersion;
}
