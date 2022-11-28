import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImageJpegResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
