import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
