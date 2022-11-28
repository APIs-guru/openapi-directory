import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectHomeUserFieldsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectHomeUserFieldsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectHomeUserFieldsListPathParams;
}


export class GetProjectHomeUserFieldsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectHomeUserFieldsListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
