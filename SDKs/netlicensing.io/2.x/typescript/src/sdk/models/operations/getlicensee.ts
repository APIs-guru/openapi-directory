import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}


export class GetLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLicenseePathParams;

  @SpeakeasyMetadata()
  security: GetLicenseeSecurity;
}


export class GetLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
