import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductTypeListOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProductTypeListOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductTypeListOfWorkgroupPathParams;
}


export class GetProductTypeListOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  workgroupAttributeListVo?: any;
}
