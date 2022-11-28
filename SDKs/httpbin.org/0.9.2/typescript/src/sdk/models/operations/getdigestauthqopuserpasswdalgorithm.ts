import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDigestAuthQopUserPasswdAlgorithmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=algorithm" })
  algorithm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qop" })
  qop: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetDigestAuthQopUserPasswdAlgorithmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDigestAuthQopUserPasswdAlgorithmPathParams;
}


export class GetDigestAuthQopUserPasswdAlgorithmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
