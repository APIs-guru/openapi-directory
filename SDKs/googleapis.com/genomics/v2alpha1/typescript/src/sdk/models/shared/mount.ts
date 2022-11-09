import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Mount
/** 
 * Carries information about a particular disk mount inside a container.
**/
export class Mount extends SpeakeasyBase {
  @Metadata({ data: "json, name=disk" })
  disk?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;
}
