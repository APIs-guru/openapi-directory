import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDigestAuthQopUserPasswdAlgorithmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=algorithm" })
  algorithm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qop" })
  qop: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetDigestAuthQopUserPasswdAlgorithmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDigestAuthQopUserPasswdAlgorithmPathParams;
}


export class GetDigestAuthQopUserPasswdAlgorithmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
