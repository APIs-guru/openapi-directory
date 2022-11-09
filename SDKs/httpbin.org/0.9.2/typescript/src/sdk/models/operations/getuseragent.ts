import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
