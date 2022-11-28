import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=regionId" })
  regionId: string;
}


export class GetRegionDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetRegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRegionPathParams;
}


export class GetRegionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  region?: shared.Region;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRegionDefaultApplicationJsonObject?: GetRegionDefaultApplicationJson;
}
