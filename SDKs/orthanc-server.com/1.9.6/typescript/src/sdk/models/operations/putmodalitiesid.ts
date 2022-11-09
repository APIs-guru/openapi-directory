import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutModalitiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutModalitiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutModalitiesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutModalitiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
