import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubjectKindEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    User = "USER",
    Serviceaccount = "SERVICEACCOUNT",
    Group = "GROUP"
}
/**
 * Represents a Kubernetes Subject.
**/
export declare class Subject extends SpeakeasyBase {
    kind?: SubjectKindEnum;
    name?: string;
    ns?: string;
}
