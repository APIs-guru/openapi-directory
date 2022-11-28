import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPatientsIdProtectedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPatientsIdProtectedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPatientsIdProtectedPathParams;
}


export class PutPatientsIdProtectedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
