import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec_id" })
  specId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutSpecRequests extends SpeakeasyBase {
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
  v1X1SpecUpdatingPo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  v1X1SpecUpdatingPo1?: any;
}


export class PutSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSpecPathParams;

  @Metadata()
  request?: PutSpecRequests;
}


export class PutSpecResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  specHttpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
