import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSpotListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSpotListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSpotListPathParams;
}


export class DeleteSpotListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
