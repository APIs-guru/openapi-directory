import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleDatastoreAdminV1IndexedPropertyDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A property of an index.
**/
export declare class GoogleDatastoreAdminV1IndexedProperty extends SpeakeasyBase {
    direction?: GoogleDatastoreAdminV1IndexedPropertyDirectionEnum;
    name?: string;
}
