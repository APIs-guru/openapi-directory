import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1OperatorMetadata
/** 
 * General information useful for labels coming from contributors.
**/
export class GoogleCloudDatalabelingV1beta1OperatorMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string[];

  @Metadata({ data: "json, name=labelVotes" })
  labelVotes?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=totalVotes" })
  totalVotes?: number;
}
