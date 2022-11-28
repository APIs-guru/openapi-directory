import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
export declare enum CreateCallRequestNccoEventMethodEnum {
    Post = "POST",
    Get = "GET"
}
export declare enum CreateCallRequestNccoMachineDetectionEnum {
    Continue = "continue",
    Hangup = "hangup"
}
export declare class CreateCallRequestNcco extends SpeakeasyBase {
    eventMethod?: CreateCallRequestNccoEventMethodEnum;
    eventUrl?: string[];
    from?: EndpointPhoneFrom;
    lengthTimer?: number;
    machineDetection?: CreateCallRequestNccoMachineDetectionEnum;
    ncco: Map<string, any>[];
    randomFromNumber?: boolean;
    ringingTimer?: number;
    to: any[];
}
