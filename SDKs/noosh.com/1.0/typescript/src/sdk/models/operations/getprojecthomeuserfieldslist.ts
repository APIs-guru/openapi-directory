import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectHomeUserFieldsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectHomeUserFieldsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectHomeUserFieldsListPathParams;
}


export class GetProjectHomeUserFieldsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectHomeUserFieldsListVo?: any;

  @Metadata()
  statusCode: number;
}
