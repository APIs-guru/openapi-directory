import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1BusinessusersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1BusinessusersIdPathParams;
}


export class DeleteSetupV1BusinessusersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
