import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1BusinessusersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1BusinessusersIdPathParams;
}


export class DeleteSetupV1BusinessusersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
