import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pool } from "./pool";



export class PoolsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: Pool })
  resources?: Pool[];
}
