import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1IndexedProperty } from "./googledatastoreadminv1indexedproperty";
export declare enum GoogleDatastoreAdminV1IndexAncestorEnum {
    AncestorModeUnspecified = "ANCESTOR_MODE_UNSPECIFIED",
    None = "NONE",
    AllAncestors = "ALL_ANCESTORS"
}
export declare enum GoogleDatastoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * Datastore composite index definition.
**/
export declare class GoogleDatastoreAdminV1Index extends SpeakeasyBase {
    ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;
    indexId?: string;
    kind?: string;
    projectId?: string;
    properties?: GoogleDatastoreAdminV1IndexedProperty[];
    state?: GoogleDatastoreAdminV1IndexStateEnum;
}
/**
 * Datastore composite index definition.
**/
export declare class GoogleDatastoreAdminV1IndexInput extends SpeakeasyBase {
    ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;
    kind?: string;
    properties?: GoogleDatastoreAdminV1IndexedProperty[];
}
