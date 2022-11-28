import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublicSystemInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicSystemInfo?: shared.PublicSystemInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
