import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaBooleanParameterArray } from "./googlecloudintegrationsv1alphabooleanparameterarray";
import { GoogleCloudIntegrationsV1alphaDoubleParameterArray } from "./googlecloudintegrationsv1alphadoubleparameterarray";
import { GoogleCloudIntegrationsV1alphaIntParameterArray } from "./googlecloudintegrationsv1alphaintparameterarray";
import { GoogleCloudIntegrationsV1alphaStringParameterArray } from "./googlecloudintegrationsv1alphastringparameterarray";



// GoogleCloudIntegrationsV1alphaValueType
/** 
 * The type of the parameter.
**/
export class GoogleCloudIntegrationsV1alphaValueType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanArray" })
  booleanArray?: GoogleCloudIntegrationsV1alphaBooleanParameterArray;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleArray" })
  doubleArray?: GoogleCloudIntegrationsV1alphaDoubleParameterArray;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intArray" })
  intArray?: GoogleCloudIntegrationsV1alphaIntParameterArray;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonValue" })
  jsonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringArray" })
  stringArray?: GoogleCloudIntegrationsV1alphaStringParameterArray;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
