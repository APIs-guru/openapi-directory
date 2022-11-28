import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemSetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteItemSetRequest extends SpeakeasyBase {
    pathParams: DeleteItemSetPathParams;
}
export declare class DeleteItemSetResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
