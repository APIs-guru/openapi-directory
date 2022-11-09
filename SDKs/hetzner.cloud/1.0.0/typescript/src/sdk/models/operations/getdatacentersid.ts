import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDatacentersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetDatacentersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatacentersIdPathParams;
}


export class GetDatacentersId200ApplicationJsonDatacenterLocation extends SpeakeasyBase {
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


// GetDatacentersId200ApplicationJsonDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetDatacentersId200ApplicationJsonDatacenterServerTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: number[];

  @Metadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @Metadata({ data: "json, name=supported" })
  supported: number[];
}


export class GetDatacentersId200ApplicationJsonDatacenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=location" })
  location: GetDatacentersId200ApplicationJsonDatacenterLocation;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=server_types" })
  serverTypes: GetDatacentersId200ApplicationJsonDatacenterServerTypes;
}


export class GetDatacentersId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=datacenter" })
  datacenter: GetDatacentersId200ApplicationJsonDatacenter;
}


export class GetDatacentersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatacentersId200ApplicationJsonObject?: GetDatacentersId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
