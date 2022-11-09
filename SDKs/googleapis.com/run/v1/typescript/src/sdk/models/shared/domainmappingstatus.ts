import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ResourceRecord } from "./resourcerecord";


// DomainMappingStatus
/** 
 * The current state of the Domain Mapping.
**/
export class DomainMappingStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=mappedRouteName" })
  mappedRouteName?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @Metadata({ data: "json, name=resourceRecords", elemType: shared.ResourceRecord })
  resourceRecords?: ResourceRecord[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
