import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetProductTypesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetProductTypesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetProductTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProductTypesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProductTypesSecurityOption2;
}


export class GetProductTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductTypesPathParams;

  @Metadata()
  security: GetProductTypesSecurity;
}


export class GetProductTypesResponse extends SpeakeasyBase {
  @Metadata()
  categoryResponse?: shared.CategoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
