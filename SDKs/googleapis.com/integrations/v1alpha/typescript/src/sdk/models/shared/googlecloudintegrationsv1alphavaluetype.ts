import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaBooleanParameterArray } from "./googlecloudintegrationsv1alphabooleanparameterarray";
import { GoogleCloudIntegrationsV1alphaDoubleParameterArray } from "./googlecloudintegrationsv1alphadoubleparameterarray";
import { GoogleCloudIntegrationsV1alphaIntParameterArray } from "./googlecloudintegrationsv1alphaintparameterarray";
import { GoogleCloudIntegrationsV1alphaStringParameterArray } from "./googlecloudintegrationsv1alphastringparameterarray";


// GoogleCloudIntegrationsV1alphaValueType
/** 
 * The type of the parameter.
**/
export class GoogleCloudIntegrationsV1alphaValueType extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanArray" })
  booleanArray?: GoogleCloudIntegrationsV1alphaBooleanParameterArray;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleArray" })
  doubleArray?: GoogleCloudIntegrationsV1alphaDoubleParameterArray;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=intArray" })
  intArray?: GoogleCloudIntegrationsV1alphaIntParameterArray;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=jsonValue" })
  jsonValue?: string;

  @Metadata({ data: "json, name=stringArray" })
  stringArray?: GoogleCloudIntegrationsV1alphaStringParameterArray;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
