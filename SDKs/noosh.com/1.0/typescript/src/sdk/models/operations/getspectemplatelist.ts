import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecTemplateListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecTemplateListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecTemplateListPathParams;
}


export class GetSpecTemplateListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  specTemplateListVo?: any;

  @Metadata()
  statusCode: number;
}
