import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
