import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsReconstructResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
