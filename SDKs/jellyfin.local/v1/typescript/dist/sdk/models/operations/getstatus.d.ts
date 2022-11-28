import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatusResponse extends SpeakeasyBase {
    contentType: string;
    quickConnectState?: shared.QuickConnectStateEnum;
    statusCode: number;
}
