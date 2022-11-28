import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLicenseTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseTemplateNumber" })
  licenseTemplateNumber: string;
}


export class DeleteLicenseTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceCascade" })
  forceCascade?: boolean;
}


export class DeleteLicenseTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DeleteLicenseTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLicenseTemplatePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteLicenseTemplateQueryParams;

  @SpeakeasyMetadata()
  security: DeleteLicenseTemplateSecurity;
}


export class DeleteLicenseTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
