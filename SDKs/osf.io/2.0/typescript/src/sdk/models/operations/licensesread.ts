import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LicensesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=license_id" })
  licenseId: string;
}


export class LicensesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LicensesReadPathParams;
}


export class LicensesReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
