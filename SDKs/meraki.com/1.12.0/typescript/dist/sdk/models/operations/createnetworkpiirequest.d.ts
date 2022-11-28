import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkPiiRequestPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkPiiRequestRequestBodyTypeEnum {
    Delete = "delete",
    RestrictProcessing = "restrict processing"
}
export declare class CreateNetworkPiiRequestRequestBody extends SpeakeasyBase {
    datasets?: string[];
    email?: string;
    mac?: string;
    smDeviceId?: string;
    smUserId?: string;
    type?: CreateNetworkPiiRequestRequestBodyTypeEnum;
    username?: string;
}
export declare class CreateNetworkPiiRequestRequest extends SpeakeasyBase {
    pathParams: CreateNetworkPiiRequestPathParams;
    request?: CreateNetworkPiiRequestRequestBody;
}
export declare class CreateNetworkPiiRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkPiiRequest201ApplicationJsonObject?: Map<string, any>;
}
