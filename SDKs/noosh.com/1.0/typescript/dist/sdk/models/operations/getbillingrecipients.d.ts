import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBillingRecipientsPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetBillingRecipientsRequest extends SpeakeasyBase {
    pathParams: GetBillingRecipientsPathParams;
}
export declare class GetBillingRecipientsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contactsListVo?: any;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
