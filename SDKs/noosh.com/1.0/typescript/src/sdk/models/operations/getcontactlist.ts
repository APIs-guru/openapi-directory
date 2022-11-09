import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetContactListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContactListPathParams;
}


export class GetContactListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contactsListVo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
