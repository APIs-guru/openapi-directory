import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostProjectRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  projectPersistVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  projectPersistVo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProjectPathParams;

  @SpeakeasyMetadata()
  request?: PostProjectRequests;
}


export class PostProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
