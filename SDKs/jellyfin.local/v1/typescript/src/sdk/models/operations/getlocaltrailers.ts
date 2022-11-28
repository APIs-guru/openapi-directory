import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocalTrailersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetLocalTrailersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLocalTrailersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocalTrailersPathParams;

  @SpeakeasyMetadata()
  security: GetLocalTrailersSecurity;
}


export class GetLocalTrailersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
