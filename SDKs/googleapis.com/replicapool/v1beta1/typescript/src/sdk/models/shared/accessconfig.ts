import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessConfig
/** 
 * A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
**/
export class AccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=natIp" })
  natIp?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
