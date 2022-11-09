import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Location;
}


export class AddLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
