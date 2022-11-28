import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
