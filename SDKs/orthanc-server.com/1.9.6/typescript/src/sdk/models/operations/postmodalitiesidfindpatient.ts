import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdFindPatientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdFindPatientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdFindPatientPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdFindPatientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdFindPatient200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
