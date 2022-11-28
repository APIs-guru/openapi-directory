import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedZoneServiceDirectoryConfigNamespace } from "./managedzoneservicedirectoryconfignamespace";



// ManagedZoneServiceDirectoryConfig
/** 
 * Contains information about Service Directory-backed zones.
**/
export class ManagedZoneServiceDirectoryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: ManagedZoneServiceDirectoryConfigNamespace;
}
