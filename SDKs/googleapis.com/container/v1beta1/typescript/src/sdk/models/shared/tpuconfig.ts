import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TpuConfig
/** 
 * Configuration for Cloud TPU.
**/
export class TpuConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=ipv4CidrBlock" })
  ipv4CidrBlock?: string;

  @Metadata({ data: "json, name=useServiceNetworking" })
  useServiceNetworking?: boolean;
}
