import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=algorithm" })
  algorithm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qop" })
  qop: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stale_after" })
  staleAfter: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams;
}


export class GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
