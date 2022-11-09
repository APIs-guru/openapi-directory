import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLocationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Location;
}


export class UpdateLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
