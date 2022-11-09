import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEchoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
