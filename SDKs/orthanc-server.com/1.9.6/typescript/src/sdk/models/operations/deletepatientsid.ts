import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePatientsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePatientsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePatientsIdPathParams;
}


export class DeletePatientsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
