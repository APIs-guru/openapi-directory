import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TraceRedirectToResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
