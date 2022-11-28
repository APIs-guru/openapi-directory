import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PongPingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pongPingGet200ApplicationJsonAny?: any;
}
