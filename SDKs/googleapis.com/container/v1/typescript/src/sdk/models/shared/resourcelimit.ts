import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceLimit
/** 
 * Contains information about amount of some resource in the cluster. For memory, value should be in GB.
**/
export class ResourceLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
