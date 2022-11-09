import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDatacentersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class GetDatacentersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatacentersQueryParams;
}


export class GetDatacenters200ApplicationJsonDatacentersLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=latitude" })
  latitude: number;

  @Metadata({ data: "json, name=longitude" })
  longitude: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;
}


// GetDatacenters200ApplicationJsonDatacentersServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetDatacenters200ApplicationJsonDatacentersServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: number[];

  @Metadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @Metadata({ data: "json, name=supported" })
  supported: number[];
}


export class GetDatacenters200ApplicationJsonDatacenters extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location: GetDatacenters200ApplicationJsonDatacentersLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server_types" })
  serverTypes: GetDatacenters200ApplicationJsonDatacentersServerTypes;
}


export class GetDatacenters200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=datacenters", elemType: operations.GetDatacenters200ApplicationJsonDatacenters })
  datacenters: GetDatacenters200ApplicationJsonDatacenters[];

  @Metadata({ data: "json, name=recommendation" })
  recommendation: number;
}


export class GetDatacentersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatacenters200ApplicationJsonObject?: GetDatacenters200ApplicationJson;

  @Metadata()
  statusCode: number;
}
