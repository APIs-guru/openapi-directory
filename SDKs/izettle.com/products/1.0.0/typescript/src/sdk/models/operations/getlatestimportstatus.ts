import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLatestImportStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetLatestImportStatusSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetLatestImportStatusSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetLatestImportStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLatestImportStatusSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLatestImportStatusSecurityOption2;
}


export class GetLatestImportStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLatestImportStatusPathParams;

  @Metadata()
  security: GetLatestImportStatusSecurity;
}


export class GetLatestImportStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importResponse?: shared.ImportResponse;

  @Metadata()
  statusCode: number;
}
