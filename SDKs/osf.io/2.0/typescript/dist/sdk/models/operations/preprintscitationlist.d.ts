import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreprintsCitationListPathParams extends SpeakeasyBase {
    preprintId: string;
}
export declare class PreprintsCitationListRequest extends SpeakeasyBase {
    pathParams: PreprintsCitationListPathParams;
}
export declare class PreprintsCitationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
