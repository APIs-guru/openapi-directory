import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveAMediaItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  media?: shared.Media;

  @Metadata()
  statusCode: number;
}
