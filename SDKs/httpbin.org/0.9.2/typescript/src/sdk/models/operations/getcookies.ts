import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCookiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
