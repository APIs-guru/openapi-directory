import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetContactListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContactListPathParams;
}


export class GetContactListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contactsListVo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
