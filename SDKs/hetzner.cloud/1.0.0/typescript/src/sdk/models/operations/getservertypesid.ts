import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServerTypesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetServerTypesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServerTypesIdPathParams;
}

export enum GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum {
    Shared = "shared"
,    Dedicated = "dedicated"
}


// GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetServerTypesId200ApplicationJsonServerTypePrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly;
}

export enum GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum {
    Local = "local"
,    Network = "network"
}


export class GetServerTypesId200ApplicationJsonServerType extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores: number;

  @Metadata({ data: "json, name=cpu_type" })
  cpuType: GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum;

  @Metadata({ data: "json, name=deprecated" })
  deprecated: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk" })
  disk: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=memory" })
  memory: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prices", elemType: operations.GetServerTypesId200ApplicationJsonServerTypePrices })
  prices: GetServerTypesId200ApplicationJsonServerTypePrices[];

  @Metadata({ data: "json, name=storage_type" })
  storageType: GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum;
}


export class GetServerTypesId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=server_type" })
  serverType: GetServerTypesId200ApplicationJsonServerType;
}


export class GetServerTypesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServerTypesId200ApplicationJsonObject?: GetServerTypesId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
