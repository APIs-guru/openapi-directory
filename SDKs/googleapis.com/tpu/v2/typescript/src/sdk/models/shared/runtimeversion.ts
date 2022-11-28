import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeVersion
/** 
 * A runtime version that a Node can be configured with.
**/
export class RuntimeVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
