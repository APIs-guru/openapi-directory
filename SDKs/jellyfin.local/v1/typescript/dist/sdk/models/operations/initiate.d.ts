import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateResponse extends SpeakeasyBase {
    contentType: string;
    quickConnectResult?: shared.QuickConnectResult;
    statusCode: number;
}
