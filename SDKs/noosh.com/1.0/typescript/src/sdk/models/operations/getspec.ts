import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec_id" })
  specId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecPathParams;
}


export class GetSpecResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1x1SpecExpandVo?: any;
}
