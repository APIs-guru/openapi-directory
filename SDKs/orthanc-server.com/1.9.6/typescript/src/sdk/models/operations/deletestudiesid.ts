import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStudiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteStudiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStudiesIdPathParams;
}


export class DeleteStudiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
