import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
