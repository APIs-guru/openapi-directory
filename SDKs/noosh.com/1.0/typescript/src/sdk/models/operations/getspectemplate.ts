import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec_template_id" })
  specTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecTemplatePathParams;
}


export class GetSpecTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  specTemplateExpandVo?: any;

  @Metadata()
  statusCode: number;
}
