import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiHealthStatus?: shared.ApiHealthStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
