import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutWorkgroupRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  workgroupUpdPersistVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  workgroupUpdPersistVo1?: any;
}


export class PutWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWorkgroupPathParams;

  @Metadata()
  request?: PutWorkgroupRequests;
}


export class PutWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  workgroupHttpStatusVo?: any;
}
