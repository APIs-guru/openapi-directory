import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmClientSessionStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientSessionStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientSessionStatsPathParams;
}


export class GetRealmClientSessionStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmClientSessionStats2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
