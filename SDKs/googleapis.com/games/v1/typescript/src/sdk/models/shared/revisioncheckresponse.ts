import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RevisionCheckResponseRevisionStatusEnum {
    RevisionStatusUnspecified = "REVISION_STATUS_UNSPECIFIED",
    Ok = "OK",
    Deprecated = "DEPRECATED",
    Invalid = "INVALID"
}


// RevisionCheckResponse
/** 
 * A third party checking a revision response.
**/
export class RevisionCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionStatus" })
  revisionStatus?: RevisionCheckResponseRevisionStatusEnum;
}
