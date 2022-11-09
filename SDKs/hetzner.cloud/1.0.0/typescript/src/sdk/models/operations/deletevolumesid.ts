import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteVolumesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteVolumesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVolumesIdPathParams;
}


export class DeleteVolumesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
