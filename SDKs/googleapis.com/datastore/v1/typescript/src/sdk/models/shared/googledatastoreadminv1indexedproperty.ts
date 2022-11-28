import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleDatastoreAdminV1IndexedPropertyDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// GoogleDatastoreAdminV1IndexedProperty
/** 
 * A property of an index.
**/
export class GoogleDatastoreAdminV1IndexedProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: GoogleDatastoreAdminV1IndexedPropertyDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
