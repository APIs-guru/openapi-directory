import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RevisionCheckResponseRevisionStatusEnum {
    RevisionStatusUnspecified = "REVISION_STATUS_UNSPECIFIED"
,    Ok = "OK"
,    Deprecated = "DEPRECATED"
,    Invalid = "INVALID"
}


// RevisionCheckResponse
/** 
 * A third party checking a revision response.
**/
export class RevisionCheckResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=revisionStatus" })
  revisionStatus?: RevisionCheckResponseRevisionStatusEnum;
}
