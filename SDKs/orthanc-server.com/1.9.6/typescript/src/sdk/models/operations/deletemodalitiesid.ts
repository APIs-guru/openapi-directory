import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteModalitiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteModalitiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteModalitiesIdPathParams;
}


export class DeleteModalitiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
