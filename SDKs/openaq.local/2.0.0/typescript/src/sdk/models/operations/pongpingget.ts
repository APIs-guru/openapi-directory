import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PongPingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pongPingGet200ApplicationJsonAny?: any;
}
