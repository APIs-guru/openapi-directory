import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetRegionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRegionsHeaders;
}


export class GetRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRegionsResponse?: shared.GetRegionsResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
