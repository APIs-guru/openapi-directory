import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkgroupListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workgroup_name" })
  workgroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=workgroup_types" })
  workgroupTypes?: string[];
}


export class GetWorkgroupListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWorkgroupListQueryParams;
}


export class GetWorkgroupListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  workgroupListVo?: any;
}
