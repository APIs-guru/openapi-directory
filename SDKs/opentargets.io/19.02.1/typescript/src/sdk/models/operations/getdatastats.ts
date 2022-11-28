import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
