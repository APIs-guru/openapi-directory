import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDatacentersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetDatacenters200ApplicationJsonDatacentersLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetDatacenters200ApplicationJsonDatacentersServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetDatacenters200ApplicationJsonDatacentersServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: number[];

  @SpeakeasyMetadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported: number[];
}


export class GetDatacenters200ApplicationJsonDatacenters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetDatacenters200ApplicationJsonDatacentersLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server_types" })
  serverTypes: GetDatacenters200ApplicationJsonDatacentersServerTypes;
}


export class GetDatacenters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datacenters", elemType: GetDatacenters200ApplicationJsonDatacenters })
  datacenters: GetDatacenters200ApplicationJsonDatacenters[];

  @SpeakeasyMetadata({ data: "json, name=recommendation" })
  recommendation: number;
}


export class GetDatacentersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDatacentersQueryParams;
}


export class GetDatacentersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatacenters200ApplicationJsonObject?: GetDatacenters200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
