import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDatastoreAdminV1IndexedProperty } from "./googledatastoreadminv1indexedproperty";

export enum GoogleDatastoreAdminV1IndexAncestorEnum {
    AncestorModeUnspecified = "ANCESTOR_MODE_UNSPECIFIED"
,    None = "NONE"
,    AllAncestors = "ALL_ANCESTORS"
}

export enum GoogleDatastoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
,    Error = "ERROR"
}


// GoogleDatastoreAdminV1Index
/** 
 * Datastore composite index definition.
**/
export class GoogleDatastoreAdminV1Index extends SpeakeasyBase {
  @Metadata({ data: "json, name=ancestor" })
  ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;

  @Metadata({ data: "json, name=indexId" })
  indexId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleDatastoreAdminV1IndexedProperty })
  properties?: GoogleDatastoreAdminV1IndexedProperty[];

  @Metadata({ data: "json, name=state" })
  state?: GoogleDatastoreAdminV1IndexStateEnum;
}
