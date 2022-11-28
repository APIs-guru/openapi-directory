import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkgroupListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workgroup_name" })
  workgroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=workgroup_types" })
  workgroupTypes?: string[];
}


export class GetWorkgroupListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWorkgroupListQueryParams;
}


export class GetWorkgroupListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workgroupListVo?: any;
}
