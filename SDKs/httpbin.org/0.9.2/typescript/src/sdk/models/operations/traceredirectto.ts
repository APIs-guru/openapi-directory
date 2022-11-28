import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TraceRedirectToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
