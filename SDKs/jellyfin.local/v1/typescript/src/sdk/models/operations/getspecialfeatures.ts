import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpecialFeaturesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetSpecialFeaturesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSpecialFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecialFeaturesPathParams;

  @SpeakeasyMetadata()
  security: GetSpecialFeaturesSecurity;
}


export class GetSpecialFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
