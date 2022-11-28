import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
