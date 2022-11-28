import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServerTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}

export enum GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}


// GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetServerTypes200ApplicationJsonServerTypesPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetServerTypes200ApplicationJsonServerTypesPricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServerTypes200ApplicationJsonServerTypesPricesPriceMonthly;
}

export enum GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum {
    Local = "local",
    Network = "network"
}


export class GetServerTypes200ApplicationJsonServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores: number;

  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType: GetServerTypes200ApplicationJsonServerTypesCpuTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetServerTypes200ApplicationJsonServerTypesPrices })
  prices: GetServerTypes200ApplicationJsonServerTypesPrices[];

  @SpeakeasyMetadata({ data: "json, name=storage_type" })
  storageType: GetServerTypes200ApplicationJsonServerTypesStorageTypeEnum;
}


export class GetServerTypes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server_types", elemType: GetServerTypes200ApplicationJsonServerTypes })
  serverTypes: GetServerTypes200ApplicationJsonServerTypes[];
}


export class GetServerTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetServerTypesQueryParams;
}


export class GetServerTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getServerTypes200ApplicationJsonObject?: GetServerTypes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
