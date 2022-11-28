import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
