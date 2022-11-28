import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1IndexedProperty } from "./googledatastoreadminv1indexedproperty";


export enum GoogleDatastoreAdminV1IndexAncestorEnum {
    AncestorModeUnspecified = "ANCESTOR_MODE_UNSPECIFIED",
    None = "NONE",
    AllAncestors = "ALL_ANCESTORS"
}

export enum GoogleDatastoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Error = "ERROR"
}


// GoogleDatastoreAdminV1Index
/** 
 * Datastore composite index definition.
**/
export class GoogleDatastoreAdminV1Index extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestor" })
  ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;

  @SpeakeasyMetadata({ data: "json, name=indexId" })
  indexId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleDatastoreAdminV1IndexedProperty })
  properties?: GoogleDatastoreAdminV1IndexedProperty[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleDatastoreAdminV1IndexStateEnum;
}


// GoogleDatastoreAdminV1IndexInput
/** 
 * Datastore composite index definition.
**/
export class GoogleDatastoreAdminV1IndexInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestor" })
  ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleDatastoreAdminV1IndexedProperty })
  properties?: GoogleDatastoreAdminV1IndexedProperty[];
}
