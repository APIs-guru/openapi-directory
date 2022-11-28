import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBitrateTestBytesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetBitrateTestBytesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetBitrateTestBytesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBitrateTestBytesQueryParams;

  @SpeakeasyMetadata()
  security: GetBitrateTestBytesSecurity;
}


export class GetBitrateTestBytesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBitrateTestBytes200ApplicationOctetStreamBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
