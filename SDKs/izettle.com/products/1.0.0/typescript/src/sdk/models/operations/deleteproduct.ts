import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productUuid" })
  productUuid: string;
}


export class DeleteProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class DeleteProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductPathParams;

  @SpeakeasyMetadata()
  security: DeleteProductSecurity;
}


export class DeleteProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
