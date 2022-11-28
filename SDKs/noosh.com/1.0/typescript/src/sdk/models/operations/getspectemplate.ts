import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpecTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_template_id" })
  specTemplateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecTemplatePathParams;
}


export class GetSpecTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specTemplateExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
