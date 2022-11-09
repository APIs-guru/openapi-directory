import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShipmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetShipmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShipmentPathParams;
}


export class GetShipmentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  shipmentExpandVo?: any;

  @Metadata()
  statusCode: number;
}
