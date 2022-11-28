import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetToolsMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
