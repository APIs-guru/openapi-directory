import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";



export class ReplicasListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: Replica })
  resources?: Replica[];
}
