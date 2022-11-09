import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPatientsIdProtectedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPatientsIdProtectedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPatientsIdProtectedPathParams;
}


export class PutPatientsIdProtectedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
