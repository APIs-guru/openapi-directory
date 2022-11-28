import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    pathParams: DeleteApplicationPathParams;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteApplication401ApplicationJsonAny?: any;
    deleteApplication404ApplicationJsonAny?: any;
    deleteApplication405ApplicationJsonAny?: any;
    deleteApplication406ApplicationJsonAny?: any;
}
