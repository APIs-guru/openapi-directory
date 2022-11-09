import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdProtectedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdProtectedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdProtectedPathParams;
}


export class GetPatientsIdProtectedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
