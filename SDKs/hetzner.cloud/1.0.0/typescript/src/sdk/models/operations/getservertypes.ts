import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServerTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetServerTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServerTypesQueryParams;
}

export enum GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum {
    Shared = "shared"
,    Dedicated = "dedicated"
}


// GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


// GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly extends SpeakeasyBase {
  @Metadata({ data: "json, name=gross" })
  gross: string;

  @Metadata({ data: "json, name=net" })
  net: string;
}


export class GetServerTypes200ApplicationJsonServerTypesPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly;
}

export enum GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum {
    Local = "local"
,    Network = "network"
}


export class GetServerTypes200ApplicationJsonServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cores" })
  cores: number;

  @Metadata({ data: "json, name=cpu_type" })
  cpuType: GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum;

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

  @Metadata({ data: "json, name=prices", elemType: operations.GetServerTypes200ApplicationJsonServerTypesPrices })
  prices: GetServerTypes200ApplicationJsonServerTypesPrices[];

  @Metadata({ data: "json, name=storage_type" })
  storageType: GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum;
}


export class GetServerTypes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=server_types", elemType: operations.GetServerTypes200ApplicationJsonServerTypes })
  serverTypes: GetServerTypes200ApplicationJsonServerTypes[];
}


export class GetServerTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServerTypes200ApplicationJsonObject?: GetServerTypes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
