import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateKvPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateKvPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateKvPairPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.KeyValuePairUpdate;
}


export class UpdateKvPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
