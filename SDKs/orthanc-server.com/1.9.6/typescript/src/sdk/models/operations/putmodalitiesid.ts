import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutModalitiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutModalitiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutModalitiesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutModalitiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
