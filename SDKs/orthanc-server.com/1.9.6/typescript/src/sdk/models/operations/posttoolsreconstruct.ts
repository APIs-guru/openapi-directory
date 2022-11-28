import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsReconstructResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
