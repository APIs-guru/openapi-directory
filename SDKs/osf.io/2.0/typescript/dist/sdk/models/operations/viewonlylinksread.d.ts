import { SpeakeasyBase } from "../../../internal/utils";
export declare class ViewOnlyLinksReadPathParams extends SpeakeasyBase {
    linkId: string;
}
export declare class ViewOnlyLinksReadRequest extends SpeakeasyBase {
    pathParams: ViewOnlyLinksReadPathParams;
}
export declare class ViewOnlyLinksReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
