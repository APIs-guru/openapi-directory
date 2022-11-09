import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostShipmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostShipmentRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  shipmentLocationPostPersistVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  shipmentLocationPostPersistVo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostShipmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostShipmentPathParams;

  @Metadata()
  request?: PostShipmentRequests;
}


export class PostShipmentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  shipmentLocationsPostResultVo?: any;

  @Metadata()
  statusCode: number;
}
