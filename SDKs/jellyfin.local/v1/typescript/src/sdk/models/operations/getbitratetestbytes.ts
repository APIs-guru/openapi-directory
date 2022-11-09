import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBitrateTestBytesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetBitrateTestBytesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetBitrateTestBytesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBitrateTestBytesQueryParams;

  @Metadata()
  security: GetBitrateTestBytesSecurity;
}


export class GetBitrateTestBytesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getBitrateTestBytes200ApplicationOctetStreamBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
