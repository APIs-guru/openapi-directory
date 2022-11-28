import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubjectKindEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    User = "USER",
    Serviceaccount = "SERVICEACCOUNT",
    Group = "GROUP"
}


// Subject
/** 
 * Represents a Kubernetes Subject.
**/
export class Subject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: SubjectKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ns" })
  ns?: string;
}
