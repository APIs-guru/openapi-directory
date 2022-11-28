import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModalitiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetModalitiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetModalitiesIdPathParams;
}


export class GetModalitiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getModalitiesId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
