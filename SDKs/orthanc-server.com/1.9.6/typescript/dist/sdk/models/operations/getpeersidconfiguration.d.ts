import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPeersIdConfigurationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPeersIdConfigurationRequest extends SpeakeasyBase {
    pathParams: GetPeersIdConfigurationPathParams;
}
export declare class GetPeersIdConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getPeersIdConfiguration200ApplicationJsonAny?: any;
    statusCode: number;
}
