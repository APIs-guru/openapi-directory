import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecretVersion
/** 
 * Configuration for a single version.
**/
export class SecretVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
