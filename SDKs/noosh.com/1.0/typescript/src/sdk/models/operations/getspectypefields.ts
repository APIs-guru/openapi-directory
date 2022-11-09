import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecTypeFieldsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec_type_id" })
  specTypeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecTypeFieldsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecTypeFieldsPathParams;
}


export class GetSpecTypeFieldsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  specTypeFieldsListVo?: any;

  @Metadata()
  statusCode: number;
}
