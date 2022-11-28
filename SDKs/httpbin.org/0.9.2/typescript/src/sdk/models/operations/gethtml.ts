import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHtmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
