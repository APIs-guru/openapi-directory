import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateApplicationRequestBodyTypeEnum {
    Voice = "voice",
    Messages = "messages"
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    answerMethod?: string;
    answerUrl?: string;
    apiKey: string;
    apiSecret: string;
    eventMethod?: string;
    eventUrl?: string;
    inboundMethod?: string;
    inboundUrl?: string;
    name: string;
    statusMethod?: string;
    statusUrl?: string;
    type: CreateApplicationRequestBodyTypeEnum;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    request?: CreateApplicationRequestBody;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    applicationCreated?: shared.ApplicationCreated;
}
