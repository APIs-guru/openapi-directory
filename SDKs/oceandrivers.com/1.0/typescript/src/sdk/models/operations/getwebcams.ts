import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebCamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
