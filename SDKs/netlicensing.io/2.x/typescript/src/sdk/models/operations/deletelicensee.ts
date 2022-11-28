import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLicenseePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" })
  licenseeNumber: string;
}


export class DeleteLicenseeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceCascade" })
  forceCascade?: boolean;
}


export class DeleteLicenseeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DeleteLicenseeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLicenseePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteLicenseeQueryParams;

  @SpeakeasyMetadata()
  security: DeleteLicenseeSecurity;
}


export class DeleteLicenseeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
