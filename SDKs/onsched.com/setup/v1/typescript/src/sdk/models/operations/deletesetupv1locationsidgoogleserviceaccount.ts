import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1LocationsIdGoogleServiceAccountPathParams;
}


export class DeleteSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
