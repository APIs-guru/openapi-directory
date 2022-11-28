import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInstancesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteInstancesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInstancesIdPathParams;
}


export class DeleteInstancesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
