import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1LocationsIdGoogleServiceAccountPathParams;
}


export class DeleteSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
