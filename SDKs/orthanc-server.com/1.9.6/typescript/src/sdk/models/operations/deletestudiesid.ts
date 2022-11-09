import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStudiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteStudiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStudiesIdPathParams;
}


export class DeleteStudiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
