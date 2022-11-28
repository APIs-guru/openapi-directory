import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ResourceRecord } from "./resourcerecord";



// DomainMappingStatus
/** 
 * The current state of the Domain Mapping.
**/
export class DomainMappingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=mappedRouteName" })
  mappedRouteName?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceRecords", elemType: ResourceRecord })
  resourceRecords?: ResourceRecord[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
