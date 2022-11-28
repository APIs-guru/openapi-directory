import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVVersionAreasAreaIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=area_Ids" })
  areaIds: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetVVersionAreasAreaIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVVersionAreasAreaIdsPathParams;
}


export class GetVVersionAreasAreaIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  areaResponse?: shared.AreaResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
