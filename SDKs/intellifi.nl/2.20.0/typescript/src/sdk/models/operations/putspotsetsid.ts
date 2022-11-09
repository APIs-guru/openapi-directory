import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSpotsetsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSpotsetsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSpotsetsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SpotSetUpdate;
}


export class PutSpotsetsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
