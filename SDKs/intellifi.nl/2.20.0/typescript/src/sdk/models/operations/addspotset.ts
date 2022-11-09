import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddSpotSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddSpotSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddSpotSetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SpotSetCreate;
}


export class AddSpotSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
