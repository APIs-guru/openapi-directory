import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDatacentersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetDatacentersId200ApplicationJsonDatacenterLocation extends SpeakeasyBase {
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


// GetDatacentersId200ApplicationJsonDatacenterServerTypes
/** 
 * The Server types the Datacenter can handle
**/
export class GetDatacentersId200ApplicationJsonDatacenterServerTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: number[];

  @SpeakeasyMetadata({ data: "json, name=available_for_migration" })
  availableForMigration: number[];

  @SpeakeasyMetadata({ data: "json, name=supported" })
  supported: number[];
}


export class GetDatacentersId200ApplicationJsonDatacenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: GetDatacentersId200ApplicationJsonDatacenterLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=server_types" })
  serverTypes: GetDatacentersId200ApplicationJsonDatacenterServerTypes;
}


export class GetDatacentersId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datacenter" })
  datacenter: GetDatacentersId200ApplicationJsonDatacenter;
}


export class GetDatacentersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatacentersIdPathParams;
}


export class GetDatacentersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatacentersId200ApplicationJsonObject?: GetDatacentersId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
