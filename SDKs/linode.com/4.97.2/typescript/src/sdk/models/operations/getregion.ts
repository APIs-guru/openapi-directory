import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=regionId" })
  regionId: string;
}


export class GetRegionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRegionPathParams;
}


export class GetRegionDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetRegionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  region?: shared.Region;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRegionDefaultApplicationJsonObject?: GetRegionDefaultApplicationJson;
}
