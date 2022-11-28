import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Volume } from "./volume";
/**
 * InstanceSpec is a description of an instance.
**/
export declare class InstanceSpec extends SpeakeasyBase {
    activeDeadlineSeconds?: string;
    containers?: Container[];
    restartPolicy?: string;
    serviceAccountName?: string;
    terminationGracePeriodSeconds?: string;
    volumes?: Volume[];
}
