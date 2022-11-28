import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { LocalObjectReference } from "./localobjectreference";
import { Volume } from "./volume";
/**
 * RevisionSpec holds the desired state of the Revision (from the client).
**/
export declare class RevisionSpec extends SpeakeasyBase {
    containerConcurrency?: number;
    containers?: Container[];
    enableServiceLinks?: boolean;
    imagePullSecrets?: LocalObjectReference[];
    serviceAccountName?: string;
    timeoutSeconds?: number;
    volumes?: Volume[];
}
