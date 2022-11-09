import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedZoneServiceDirectoryConfigNamespace } from "./managedzoneservicedirectoryconfignamespace";


// ManagedZoneServiceDirectoryConfig
/** 
 * Contains information about Service Directory-backed zones.
**/
export class ManagedZoneServiceDirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: ManagedZoneServiceDirectoryConfigNamespace;
}
