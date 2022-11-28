import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteModalitiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteModalitiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModalitiesIdPathParams;
}


export class DeleteModalitiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
