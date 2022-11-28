import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
