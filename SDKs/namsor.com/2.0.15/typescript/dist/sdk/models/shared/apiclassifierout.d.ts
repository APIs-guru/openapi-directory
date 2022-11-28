import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The list of classifiers and versions.
**/
export declare class ApiClassifierOut extends SpeakeasyBase {
    classifierName?: string;
    learning?: boolean;
    probabilityCalibrated?: boolean;
    serving?: boolean;
    shuttingDown?: boolean;
}
