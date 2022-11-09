import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceLimit
/** 
 * Contains information about amount of some resource in the cluster. For memory, value should be in GB.
**/
export class ResourceLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximum" })
  maximum?: string;

  @Metadata({ data: "json, name=minimum" })
  minimum?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
