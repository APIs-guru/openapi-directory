import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HatOnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  textError?: string;
}
