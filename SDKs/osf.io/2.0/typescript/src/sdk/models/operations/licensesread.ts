import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LicensesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=license_id" })
  licenseId: string;
}


export class LicensesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LicensesReadPathParams;
}


export class LicensesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
