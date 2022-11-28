import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
export declare enum CreateCallRequestAnswerUrlAnswerMethodEnum {
    Post = "POST",
    Get = "GET"
}
export declare enum CreateCallRequestAnswerUrlEventMethodEnum {
    Post = "POST",
    Get = "GET"
}
export declare enum CreateCallRequestAnswerUrlMachineDetectionEnum {
    Continue = "continue",
    Hangup = "hangup"
}
export declare class CreateCallRequestAnswerUrl extends SpeakeasyBase {
    answerMethod?: CreateCallRequestAnswerUrlAnswerMethodEnum;
    answerUrl: string[];
    eventMethod?: CreateCallRequestAnswerUrlEventMethodEnum;
    eventUrl?: string[];
    from?: EndpointPhoneFrom;
    lengthTimer?: number;
    machineDetection?: CreateCallRequestAnswerUrlMachineDetectionEnum;
    randomFromNumber?: boolean;
    ringingTimer?: number;
    to: any[];
}
