import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Mount
/** 
 * Carries information about a particular disk mount inside a container.
**/
export class Mount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;
}
