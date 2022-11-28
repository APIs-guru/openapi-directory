import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";
/**
 * Represents a form parameter.
**/
export declare class GoogleCloudDialogflowCxV3beta1FormParameter extends SpeakeasyBase {
    defaultValue?: any;
    displayName?: string;
    entityType?: string;
    fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
    isList?: boolean;
    redact?: boolean;
    required?: boolean;
}
/**
 * Represents a form parameter.
**/
export declare class GoogleCloudDialogflowCxV3beta1FormParameterInput extends SpeakeasyBase {
    defaultValue?: any;
    displayName?: string;
    entityType?: string;
    fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput;
    isList?: boolean;
    redact?: boolean;
    required?: boolean;
}
