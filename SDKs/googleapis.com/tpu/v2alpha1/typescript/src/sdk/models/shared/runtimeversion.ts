import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeVersion
/** 
 * A runtime version that a Node can be configured with.
**/
export class RuntimeVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
