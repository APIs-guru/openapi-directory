import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsShutdownResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
