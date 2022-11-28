import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
