import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpecTypeFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_type_id" })
  specTypeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecTypeFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecTypeFieldsPathParams;
}


export class GetSpecTypeFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specTypeFieldsListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
