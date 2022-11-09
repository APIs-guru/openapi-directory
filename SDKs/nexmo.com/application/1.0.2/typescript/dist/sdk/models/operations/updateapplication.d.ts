import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateApplicationPathParams extends SpeakeasyBase {
    appId: string;
}
export declare enum UpdateApplicationRequestBodyTypeEnum {
    Voice = "voice",
    Messages = "messages"
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    answerMethod?: string;
    answerUrl?: string;
    apiKey: string;
    apiSecret: string;
    eventMethod?: string;
    eventUrl?: string;
    name: string;
    type: UpdateApplicationRequestBodyTypeEnum;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    pathParams: UpdateApplicationPathParams;
    request?: UpdateApplicationRequestBody;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    application?: shared.Application;
}
