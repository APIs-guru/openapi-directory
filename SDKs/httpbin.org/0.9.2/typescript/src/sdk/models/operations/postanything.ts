import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
