import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecretVersion
/** 
 * Configuration for a single version.
**/
export class SecretVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
