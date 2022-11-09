import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1LocationsIdGoogleServiceAccountPathParams;
}


export class GetSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;

  @Metadata()
  statusCode: number;
}
