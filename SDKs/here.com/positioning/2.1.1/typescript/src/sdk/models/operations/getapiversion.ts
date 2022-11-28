import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiVersion?: shared.ApiVersion;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
