import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmClientSessionStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientSessionStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientSessionStatsPathParams;
}


export class GetRealmClientSessionStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmClientSessionStats2XxApplicationJsonObjects?: Map<string, any>[];

  @SpeakeasyMetadata()
  statusCode: number;
}
