import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKernelPathParams extends SpeakeasyBase {
    kernelId: string;
}
export declare class GetKernelDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetKernelRequest extends SpeakeasyBase {
    pathParams: GetKernelPathParams;
}
export declare class GetKernelResponse extends SpeakeasyBase {
    contentType: string;
    kernel?: shared.Kernel;
    statusCode: number;
    getKernelDefaultApplicationJsonObject?: GetKernelDefaultApplicationJson;
}
