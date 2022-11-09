import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPublicSystemInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publicSystemInfo?: shared.PublicSystemInfo;

  @Metadata()
  statusCode: number;
}
