import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImageSvgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
