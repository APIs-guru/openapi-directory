import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdFindSeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdFindSeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdFindSeriesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdFindSeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdFindSeries200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
