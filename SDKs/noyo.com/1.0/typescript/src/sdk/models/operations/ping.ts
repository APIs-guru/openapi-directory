import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
