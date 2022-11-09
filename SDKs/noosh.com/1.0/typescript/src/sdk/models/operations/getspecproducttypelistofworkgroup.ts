import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecProductTypeListOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecProductTypeListOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecProductTypeListOfWorkgroupPathParams;
}


export class GetSpecProductTypeListOfWorkgroupResponse extends SpeakeasyBase {
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
