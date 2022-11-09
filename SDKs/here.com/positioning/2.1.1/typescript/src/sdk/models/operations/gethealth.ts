import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHealthResponse extends SpeakeasyBase {
  @Metadata()
  apiHealthStatus?: shared.ApiHealthStatus;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
