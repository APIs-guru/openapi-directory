import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FormParameterFillBehavior } from "./googleclouddialogflowcxv3formparameterfillbehavior";
import { GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput } from "./googleclouddialogflowcxv3formparameterfillbehavior";
/**
 * Represents a form parameter.
**/
export declare class GoogleCloudDialogflowCxV3FormParameter extends SpeakeasyBase {
    defaultValue?: any;
    displayName?: string;
    entityType?: string;
    fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;
    isList?: boolean;
    redact?: boolean;
    required?: boolean;
}
/**
 * Represents a form parameter.
**/
export declare class GoogleCloudDialogflowCxV3FormParameterInput extends SpeakeasyBase {
    defaultValue?: any;
    displayName?: string;
    entityType?: string;
    fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput;
    isList?: boolean;
    redact?: boolean;
    required?: boolean;
}
