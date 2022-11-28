import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBrotliResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
