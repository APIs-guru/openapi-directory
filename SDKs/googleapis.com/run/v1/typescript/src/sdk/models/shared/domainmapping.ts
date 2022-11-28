import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { DomainMappingSpec } from "./domainmappingspec";
import { DomainMappingStatus } from "./domainmappingstatus";



// DomainMapping
/** 
 * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
**/
export class DomainMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: DomainMappingSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DomainMappingStatus;
}
