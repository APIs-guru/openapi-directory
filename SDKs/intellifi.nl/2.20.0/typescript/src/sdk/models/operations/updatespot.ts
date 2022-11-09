import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSpotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSpotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSpotPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SpotUpdate;
}


export class UpdateSpotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
