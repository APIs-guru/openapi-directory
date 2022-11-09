import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllOptionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetAllOptionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetAllOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllOptionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllOptionsSecurityOption2;
}


export class GetAllOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllOptionsPathParams;

  @Metadata()
  security: GetAllOptionsSecurity;
}


export class GetAllOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.VariantOptionsResponse })
  variantOptionsResponses?: shared.VariantOptionsResponse[];
}
