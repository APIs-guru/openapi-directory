import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBillingRecipientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBillingRecipientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBillingRecipientsPathParams;
}


export class GetBillingRecipientsResponse extends SpeakeasyBase {
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
