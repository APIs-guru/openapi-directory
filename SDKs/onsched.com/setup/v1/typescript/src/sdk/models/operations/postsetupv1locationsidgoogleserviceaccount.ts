import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdGoogleServiceAccountRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  googleServiceAccountCreds1?: shared.GoogleServiceAccountCreds;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  googleServiceAccountCreds2?: shared.GoogleServiceAccountCreds;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  googleServiceAccountCreds3?: shared.GoogleServiceAccountCreds;
}


export class PostSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1LocationsIdGoogleServiceAccountPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsIdGoogleServiceAccountRequests;
}


export class PostSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;

  @SpeakeasyMetadata()
  statusCode: number;
}
