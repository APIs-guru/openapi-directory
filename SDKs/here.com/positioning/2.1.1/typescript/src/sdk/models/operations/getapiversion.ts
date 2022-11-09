import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  apiVersion?: shared.ApiVersion;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
