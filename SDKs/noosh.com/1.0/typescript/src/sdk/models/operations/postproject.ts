import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostProjectRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  projectPersistVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  projectPersistVo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProjectPathParams;

  @Metadata()
  request?: PostProjectRequests;
}


export class PostProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectVo?: any;

  @Metadata()
  statusCode: number;
}
