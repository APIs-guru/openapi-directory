import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaBooleanParameterArray } from "./googlecloudintegrationsv1alphabooleanparameterarray";
import { GoogleCloudIntegrationsV1alphaDoubleParameterArray } from "./googlecloudintegrationsv1alphadoubleparameterarray";
import { GoogleCloudIntegrationsV1alphaIntParameterArray } from "./googlecloudintegrationsv1alphaintparameterarray";
import { GoogleCloudIntegrationsV1alphaStringParameterArray } from "./googlecloudintegrationsv1alphastringparameterarray";
/**
 * The type of the parameter.
**/
export declare class GoogleCloudIntegrationsV1alphaValueType extends SpeakeasyBase {
    booleanArray?: GoogleCloudIntegrationsV1alphaBooleanParameterArray;
    booleanValue?: boolean;
    doubleArray?: GoogleCloudIntegrationsV1alphaDoubleParameterArray;
    doubleValue?: number;
    intArray?: GoogleCloudIntegrationsV1alphaIntParameterArray;
    intValue?: string;
    jsonValue?: string;
    stringArray?: GoogleCloudIntegrationsV1alphaStringParameterArray;
    stringValue?: string;
}
