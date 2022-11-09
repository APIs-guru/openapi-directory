import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec_type_id" })
  specTypeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams;
}


export class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  propertyParamListVo?: any;

  @Metadata()
  statusCode: number;
}
