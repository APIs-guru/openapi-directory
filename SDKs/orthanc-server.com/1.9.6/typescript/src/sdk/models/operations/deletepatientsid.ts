import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePatientsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePatientsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePatientsIdPathParams;
}


export class DeletePatientsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
