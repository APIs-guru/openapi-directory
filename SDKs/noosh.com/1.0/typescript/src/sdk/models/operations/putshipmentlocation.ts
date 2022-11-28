import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutShipmentLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutShipmentLocationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  shipmentLocationPersistVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  shipmentLocationPersistVo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PutShipmentLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutShipmentLocationPathParams;

  @SpeakeasyMetadata()
  request?: PutShipmentLocationRequests;
}


export class PutShipmentLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
