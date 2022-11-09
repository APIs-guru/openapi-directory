import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRacksElevationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum DcimRacksElevationFaceEnum {
    Front = "front"
,    Rear = "rear"
}

export enum DcimRacksElevationRenderEnum {
    Json = "json"
,    Svg = "svg"
}


export class DcimRacksElevationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand_devices" })
  expandDevices?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=face" })
  face?: DcimRacksElevationFaceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_images" })
  includeImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=legend_width" })
  legendWidth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=render" })
  render?: DcimRacksElevationRenderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit_height" })
  unitHeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit_width" })
  unitWidth?: number;
}


export class DcimRacksElevationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRacksElevationPathParams;

  @Metadata()
  queryParams: DcimRacksElevationQueryParams;
}


export class DcimRacksElevationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RackUnit })
  rackUnits?: shared.RackUnit[];

  @Metadata()
  statusCode: number;
}
