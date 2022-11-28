import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NonCompliantFile
/** 
 * Details about files that caused a compliance check to fail.
**/
export class NonCompliantFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayCommand" })
  displayCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
