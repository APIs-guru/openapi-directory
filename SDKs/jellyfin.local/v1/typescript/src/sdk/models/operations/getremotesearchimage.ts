import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRemoteSearchImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageUrl" })
  imageUrl: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerName" })
  providerName: string;
}


export class GetRemoteSearchImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteSearchImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoteSearchImageQueryParams;

  @SpeakeasyMetadata()
  security: GetRemoteSearchImageSecurity;
}


export class GetRemoteSearchImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRemoteSearchImage200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
