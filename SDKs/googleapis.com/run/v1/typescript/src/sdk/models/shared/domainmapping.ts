import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { DomainMappingSpec } from "./domainmappingspec";
import { DomainMappingStatus } from "./domainmappingstatus";


// DomainMapping
/** 
 * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
**/
export class DomainMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: DomainMappingSpec;

  @Metadata({ data: "json, name=status" })
  status?: DomainMappingStatus;
}
