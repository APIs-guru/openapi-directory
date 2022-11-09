import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Script
/** 
 * A script to transformer otoroshi requests 
**/
export class Script extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: Map<string, string>;

  @Metadata({ data: "json, name=desc" })
  desc: Map<string, string>;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
