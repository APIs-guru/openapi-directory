import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpecialFeaturesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetSpecialFeaturesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSpecialFeaturesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecialFeaturesPathParams;

  @Metadata()
  security: GetSpecialFeaturesSecurity;
}


export class GetSpecialFeaturesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
