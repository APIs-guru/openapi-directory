import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsIdGoogleServiceAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdGoogleServiceAccountRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;

  @Metadata({ data: "request, media_type=application/json" })
  googleServiceAccountCreds1?: shared.GoogleServiceAccountCreds;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  googleServiceAccountCreds2?: shared.GoogleServiceAccountCreds;

  @Metadata({ data: "request, media_type=text/json" })
  googleServiceAccountCreds3?: shared.GoogleServiceAccountCreds;
}


export class PostSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1LocationsIdGoogleServiceAccountPathParams;

  @Metadata()
  request?: PostSetupV1LocationsIdGoogleServiceAccountRequests;
}


export class PostSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;

  @Metadata()
  statusCode: number;
}
