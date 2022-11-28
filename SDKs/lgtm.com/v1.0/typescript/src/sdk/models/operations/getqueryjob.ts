import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" })
  queryjobId: string;
}


export class GetQueryJobSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetQueryJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryJobPathParams;

  @SpeakeasyMetadata()
  security: GetQueryJobSecurity;
}


export class GetQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  queryjob?: shared.Queryjob;
}
