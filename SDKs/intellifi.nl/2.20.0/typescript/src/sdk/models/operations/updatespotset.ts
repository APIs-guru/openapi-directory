import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSpotSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=setId" })
  setId: string;
}


export class UpdateSpotSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSpotSetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SpotSetUpdate;
}


export class UpdateSpotSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
