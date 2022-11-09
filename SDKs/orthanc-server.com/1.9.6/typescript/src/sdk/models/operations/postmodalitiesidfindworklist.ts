import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdFindWorklistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdFindWorklistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdFindWorklistPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdFindWorklistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdFindWorklist200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
