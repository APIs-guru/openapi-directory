import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessConfig
/** 
 * A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
**/
export class AccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=natIp" })
  natIp?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
