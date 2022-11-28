import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVolumesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteVolumesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVolumesIdPathParams;
}


export class DeleteVolumesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
