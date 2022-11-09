import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WarehouseBasedDeliveryTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=carrierService" })
  carrierService?: string;

  @Metadata({ data: "json, name=originAdministrativeArea" })
  originAdministrativeArea?: string;

  @Metadata({ data: "json, name=originCity" })
  originCity?: string;

  @Metadata({ data: "json, name=originCountry" })
  originCountry?: string;

  @Metadata({ data: "json, name=originPostalCode" })
  originPostalCode?: string;

  @Metadata({ data: "json, name=originStreetAddress" })
  originStreetAddress?: string;

  @Metadata({ data: "json, name=warehouseName" })
  warehouseName?: string;
}
