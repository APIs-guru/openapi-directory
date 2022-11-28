import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBillingRecipientsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBillingRecipientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBillingRecipientsPathParams;
}


export class GetBillingRecipientsResponse extends SpeakeasyBase {
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
