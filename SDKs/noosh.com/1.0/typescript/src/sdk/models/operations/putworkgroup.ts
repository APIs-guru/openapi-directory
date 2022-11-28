import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutWorkgroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  workgroupUpdPersistVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  workgroupUpdPersistVo1?: any;
}


export class PutWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWorkgroupPathParams;

  @SpeakeasyMetadata()
  request?: PutWorkgroupRequests;
}


export class PutWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workgroupHttpStatusVo?: any;
}
