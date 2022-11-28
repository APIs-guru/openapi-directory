import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiStatusResponse extends SpeakeasyBase {
    apiClassifiersStatusOut?: shared.ApiClassifiersStatusOut;
    contentType: string;
    statusCode: number;
}
