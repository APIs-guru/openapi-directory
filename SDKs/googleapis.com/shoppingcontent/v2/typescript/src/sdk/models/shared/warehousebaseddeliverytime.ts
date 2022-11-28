import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WarehouseBasedDeliveryTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierService" })
  carrierService?: string;

  @SpeakeasyMetadata({ data: "json, name=originAdministrativeArea" })
  originAdministrativeArea?: string;

  @SpeakeasyMetadata({ data: "json, name=originCity" })
  originCity?: string;

  @SpeakeasyMetadata({ data: "json, name=originCountry" })
  originCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=originPostalCode" })
  originPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=originStreetAddress" })
  originStreetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=warehouseName" })
  warehouseName?: string;
}
