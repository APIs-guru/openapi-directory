import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVVersionAreasAreaIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=area_Ids" })
  areaIds: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetVVersionAreasAreaIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVVersionAreasAreaIdsPathParams;
}


export class GetVVersionAreasAreaIdsResponse extends SpeakeasyBase {
  @Metadata()
  areaResponse?: shared.AreaResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
