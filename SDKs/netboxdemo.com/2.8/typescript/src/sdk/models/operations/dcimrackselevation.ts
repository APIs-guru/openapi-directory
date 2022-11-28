import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRacksElevationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum DcimRacksElevationFaceEnum {
    Front = "front",
    Rear = "rear"
}

export enum DcimRacksElevationRenderEnum {
    Json = "json",
    Svg = "svg"
}


export class DcimRacksElevationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand_devices" })
  expandDevices?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=face" })
  face?: DcimRacksElevationFaceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_images" })
  includeImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=legend_width" })
  legendWidth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=render" })
  render?: DcimRacksElevationRenderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit_height" })
  unitHeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit_width" })
  unitWidth?: number;
}


export class DcimRacksElevationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRacksElevationPathParams;

  @SpeakeasyMetadata()
  queryParams: DcimRacksElevationQueryParams;
}


export class DcimRacksElevationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RackUnit })
  rackUnits?: shared.RackUnit[];

  @SpeakeasyMetadata()
  statusCode: number;
}
