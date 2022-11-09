import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetModalitiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetModalitiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetModalitiesIdPathParams;
}


export class GetModalitiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getModalitiesId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
