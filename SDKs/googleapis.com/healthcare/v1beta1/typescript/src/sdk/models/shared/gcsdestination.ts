import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GcsDestinationContentStructureEnum {
    ContentStructureUnspecified = "CONTENT_STRUCTURE_UNSPECIFIED"
,    MessageJson = "MESSAGE_JSON"
}

export enum GcsDestinationMessageViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED"
,    RawOnly = "RAW_ONLY"
,    ParsedOnly = "PARSED_ONLY"
,    Full = "FULL"
,    SchematizedOnly = "SCHEMATIZED_ONLY"
,    Basic = "BASIC"
}


// GcsDestination
/** 
 * The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.
**/
export class GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentStructure" })
  contentStructure?: GcsDestinationContentStructureEnum;

  @Metadata({ data: "json, name=messageView" })
  messageView?: GcsDestinationMessageViewEnum;

  @Metadata({ data: "json, name=uriPrefix" })
  uriPrefix?: string;
}
