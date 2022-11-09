import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
