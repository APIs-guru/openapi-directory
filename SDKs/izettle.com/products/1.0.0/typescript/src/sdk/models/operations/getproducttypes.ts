import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetProductTypesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetProductTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductTypesPathParams;

  @SpeakeasyMetadata()
  security: GetProductTypesSecurity;
}


export class GetProductTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryResponse?: shared.CategoryResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
