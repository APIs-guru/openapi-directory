import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMappingValuesKeyKeyEnum {
    IdType = "idType",
    ExchCode = "exchCode",
    MicCode = "micCode",
    Currency = "currency",
    MarketSecDes = "marketSecDes",
    SecurityType = "securityType",
    SecurityType2 = "securityType2"
}
export declare class GetMappingValuesKeyPathParams extends SpeakeasyBase {
    key: GetMappingValuesKeyKeyEnum;
}
export declare class GetMappingValuesKey200ApplicationJson extends SpeakeasyBase {
    values?: string[];
}
export declare class GetMappingValuesKeyRequest extends SpeakeasyBase {
    pathParams: GetMappingValuesKeyPathParams;
}
export declare class GetMappingValuesKeyResponse extends SpeakeasyBase {
    contentType: string;
    getMappingValuesKey200ApplicationJsonObject?: GetMappingValuesKey200ApplicationJson;
    getMappingValuesKey400WildcardString?: string;
    getMappingValuesKey500WildcardString?: string;
    statusCode: number;
}
