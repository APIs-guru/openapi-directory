import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGzipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
