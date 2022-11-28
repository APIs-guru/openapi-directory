import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRfePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rfe_id" })
  rfeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRfePathParams;
}


export class GetRfeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  rfeExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
