import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteKvPairPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteKvPairRequest extends SpeakeasyBase {
    pathParams: DeleteKvPairPathParams;
}
export declare class DeleteKvPairResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
