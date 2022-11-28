import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMappingValuesKeyKeyEnum {
    IdType = "idType",
    ExchCode = "exchCode",
    MicCode = "micCode",
    Currency = "currency",
    MarketSecDes = "marketSecDes",
    SecurityType = "securityType",
    SecurityType2 = "securityType2"
}


export class GetMappingValuesKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: GetMappingValuesKeyKeyEnum;
}


export class GetMappingValuesKey200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}


export class GetMappingValuesKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMappingValuesKeyPathParams;
}


export class GetMappingValuesKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMappingValuesKey200ApplicationJsonObject?: GetMappingValuesKey200ApplicationJson;

  @SpeakeasyMetadata()
  getMappingValuesKey400WildcardString?: string;

  @SpeakeasyMetadata()
  getMappingValuesKey500WildcardString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
