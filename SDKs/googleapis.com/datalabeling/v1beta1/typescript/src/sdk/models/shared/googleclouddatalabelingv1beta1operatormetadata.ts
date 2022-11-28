import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1OperatorMetadata
/** 
 * General information useful for labels coming from contributors.
**/
export class GoogleCloudDatalabelingV1beta1OperatorMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string[];

  @SpeakeasyMetadata({ data: "json, name=labelVotes" })
  labelVotes?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=totalVotes" })
  totalVotes?: number;
}
