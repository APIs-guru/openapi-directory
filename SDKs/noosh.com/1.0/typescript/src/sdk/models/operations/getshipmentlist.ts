import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShipmentListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetShipmentListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShipmentListPathParams;
}


export class GetShipmentListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  shipmentListVo?: any;

  @Metadata()
  statusCode: number;
}
