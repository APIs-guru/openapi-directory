import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMappingValuesKeyKeyEnum {
    IdType = "idType"
,    ExchCode = "exchCode"
,    MicCode = "micCode"
,    Currency = "currency"
,    MarketSecDes = "marketSecDes"
,    SecurityType = "securityType"
,    SecurityType2 = "securityType2"
}


export class GetMappingValuesKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: GetMappingValuesKeyKeyEnum;
}


export class GetMappingValuesKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMappingValuesKeyPathParams;
}


export class GetMappingValuesKey200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}


export class GetMappingValuesKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMappingValuesKey200ApplicationJsonObject?: GetMappingValuesKey200ApplicationJson;

  @Metadata()
  getMappingValuesKey400WildcardString?: string;

  @Metadata()
  getMappingValuesKey500WildcardString?: string;

  @Metadata()
  statusCode: number;
}
