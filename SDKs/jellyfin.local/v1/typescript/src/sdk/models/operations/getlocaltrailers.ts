import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLocalTrailersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetLocalTrailersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLocalTrailersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLocalTrailersPathParams;

  @Metadata()
  security: GetLocalTrailersSecurity;
}


export class GetLocalTrailersResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
