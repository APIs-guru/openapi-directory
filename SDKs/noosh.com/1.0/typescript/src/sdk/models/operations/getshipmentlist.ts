import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShipmentListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetShipmentListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShipmentListPathParams;
}


export class GetShipmentListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  shipmentListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
