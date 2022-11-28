import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=algorithm" })
  algorithm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qop" })
  qop: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stale_after" })
  staleAfter: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams;
}


export class GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
