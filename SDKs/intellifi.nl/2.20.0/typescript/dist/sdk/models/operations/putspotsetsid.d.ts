import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSpotsetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSpotsetsIdRequest extends SpeakeasyBase {
    pathParams: PutSpotsetsIdPathParams;
    request: shared.SpotSetUpdate;
}
export declare class PutSpotsetsIdResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
