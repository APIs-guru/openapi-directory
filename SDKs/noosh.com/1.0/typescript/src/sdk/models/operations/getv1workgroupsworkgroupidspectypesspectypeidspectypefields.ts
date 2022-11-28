import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spec_type_id" })
  specTypeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams;
}


export class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  propertyParamListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
