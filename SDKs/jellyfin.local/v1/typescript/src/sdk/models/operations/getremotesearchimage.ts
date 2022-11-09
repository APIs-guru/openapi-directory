import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRemoteSearchImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imageUrl" })
  imageUrl: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=providerName" })
  providerName: string;
}


export class GetRemoteSearchImageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteSearchImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoteSearchImageQueryParams;

  @Metadata()
  security: GetRemoteSearchImageSecurity;
}


export class GetRemoteSearchImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRemoteSearchImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
