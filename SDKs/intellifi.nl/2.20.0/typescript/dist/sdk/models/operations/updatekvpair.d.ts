import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateKvPairPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateKvPairRequest extends SpeakeasyBase {
    pathParams: UpdateKvPairPathParams;
    request: shared.KeyValuePairUpdate;
}
export declare class UpdateKvPairResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
