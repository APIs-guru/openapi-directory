import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
