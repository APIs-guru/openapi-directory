import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A unique identifier for the type of message. Display_name is intended to be human-readable, code is intended to be machine readable. There should be a one-to-one mapping between display_name and code. (i.e. do not re-use display_names or codes between message types.) See istio.analysis.v1alpha1.AnalysisMessageBase.Type
**/
export declare class ServiceMeshType extends SpeakeasyBase {
    code?: string;
    displayName?: string;
}
