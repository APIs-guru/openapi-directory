import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHealthResponse extends SpeakeasyBase {
    apiHealthStatus?: shared.ApiHealthStatus;
    contentType: string;
    statusCode: number;
}
