import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
