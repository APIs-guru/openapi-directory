import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubjectKindEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED"
,    User = "USER"
,    Serviceaccount = "SERVICEACCOUNT"
,    Group = "GROUP"
}


// Subject
/** 
 * Represents a Kubernetes Subject.
**/
export class Subject extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: SubjectKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ns" })
  ns?: string;
}
