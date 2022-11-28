import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1LocationsIdGoogleServiceAccountPathParams;
}


export class GetSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;

  @SpeakeasyMetadata()
  statusCode: number;
}
