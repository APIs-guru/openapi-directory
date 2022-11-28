import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostModalitiesIdFindPatientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdFindPatientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostModalitiesIdFindPatientPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdFindPatientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postModalitiesIdFindPatient200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
