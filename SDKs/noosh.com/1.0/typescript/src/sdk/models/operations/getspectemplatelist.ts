import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpecTemplateListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecTemplateListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecTemplateListPathParams;
}


export class GetSpecTemplateListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specTemplateListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
