import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TraceAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
