import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildVersion } from "./buildversion";


// Extension
/** 
 * Version and identification for an Envoy extension. [#next-free-field: 6]
**/
export class Extension extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=typeDescriptor" })
  typeDescriptor?: string;

  @Metadata({ data: "json, name=version" })
  version?: BuildVersion;
}
