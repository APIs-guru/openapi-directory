import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Script
/** 
 * A script to transformer otoroshi requests 
**/
export class Script extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
