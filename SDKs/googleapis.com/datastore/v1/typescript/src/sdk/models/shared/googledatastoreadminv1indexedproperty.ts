import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleDatastoreAdminV1IndexedPropertyDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// GoogleDatastoreAdminV1IndexedProperty
/** 
 * A property of an index.
**/
export class GoogleDatastoreAdminV1IndexedProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: GoogleDatastoreAdminV1IndexedPropertyDirectionEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
