import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSpecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_id" })
  specId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutSpecRequests extends SpeakeasyBase {
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
  v1X1SpecUpdatingPo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  v1X1SpecUpdatingPo1?: any;
}


export class PutSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSpecPathParams;

  @SpeakeasyMetadata()
  request?: PutSpecRequests;
}


export class PutSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specHttpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
