import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstancesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteInstancesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteInstancesIdPathParams;
}


export class DeleteInstancesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
