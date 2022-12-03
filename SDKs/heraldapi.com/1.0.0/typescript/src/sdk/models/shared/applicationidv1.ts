import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationIdV1
/** 
 * The `id` of an application. 
**/
export class ApplicationIdV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
