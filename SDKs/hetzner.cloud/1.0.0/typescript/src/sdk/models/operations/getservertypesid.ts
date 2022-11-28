import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServerTypesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum {
    Shared = "shared",
    Dedicated = "dedicated"
}


// GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly
/** 
 * Hourly costs for a Server type in this Location
**/
export class GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


// GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly
/** 
 * Monthly costs for a Server type in this Location
**/
export class GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross" })
  gross: string;

  @SpeakeasyMetadata({ data: "json, name=net" })
  net: string;
}


export class GetServerTypesId200ApplicationJsonServerTypePrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: GetServerTypesId200ApplicationJsonServerTypePricesPriceHourly;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: GetServerTypesId200ApplicationJsonServerTypePricesPriceMonthly;
}

export enum GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum {
    Local = "local",
    Network = "network"
}


export class GetServerTypesId200ApplicationJsonServerType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cores" })
  cores: number;

  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType: GetServerTypesId200ApplicationJsonServerTypeCpuTypeEnum;

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

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: GetServerTypesId200ApplicationJsonServerTypePrices })
  prices: GetServerTypesId200ApplicationJsonServerTypePrices[];

  @SpeakeasyMetadata({ data: "json, name=storage_type" })
  storageType: GetServerTypesId200ApplicationJsonServerTypeStorageTypeEnum;
}


export class GetServerTypesId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: GetServerTypesId200ApplicationJsonServerType;
}


export class GetServerTypesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServerTypesIdPathParams;
}


export class GetServerTypesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getServerTypesId200ApplicationJsonObject?: GetServerTypesId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
