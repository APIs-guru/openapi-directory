import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TpuConfig
/** 
 * Configuration for Cloud TPU.
**/
export class TpuConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv4CidrBlock" })
  ipv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=useServiceNetworking" })
  useServiceNetworking?: boolean;
}
