import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiKeyOut
/** 
 * The API Key.
**/
export class ApiKeyOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=anonymized" })
  anonymized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=corporate" })
  corporate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=learnable" })
  learnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=striped" })
  striped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=vetted" })
  vetted?: boolean;
}
