import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagePngResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
