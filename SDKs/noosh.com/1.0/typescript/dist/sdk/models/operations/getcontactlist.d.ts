import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContactListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetContactListRequest extends SpeakeasyBase {
    pathParams: GetContactListPathParams;
}
export declare class GetContactListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contactsListVo?: any;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
